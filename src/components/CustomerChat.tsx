import { useState, useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, User, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ChatMessage {
  id: string;
  session_id: string;
  sender_type: 'admin' | 'user';
  sender_name: string;
  message: string;
  created_at: string;
}

interface CustomerChatProps {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  cartTotal: number;
  cartItems: any[];
}

const CustomerChat = ({ customerName, customerEmail, customerPhone, cartTotal, cartItems }: CustomerChatProps) => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string>("");
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initializeChat();
  }, []);

  useEffect(() => {
    if (sessionId) {
      subscribeToMessages();
      fetchMessages();
    }
  }, [sessionId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const initializeChat = async () => {
    // Create a unique session ID
    const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    setSessionId(newSessionId);

    // Create chat session
    const { error } = await supabase
      .from('chat_sessions')
      .insert({
        session_id: newSessionId,
        customer_name: customerName,
        customer_email: customerEmail,
        customer_phone: customerPhone,
        cart_total: cartTotal,
        cart_items: cartItems,
        status: 'active'
      });

    if (error) {
      console.error('Error creating chat session:', error);
      toast({
        title: "Connection Error",
        description: "Failed to start chat session. Please try again.",
        variant: "destructive",
      });
    } else {
      setIsConnected(true);
      // Send initial message
      await sendInitialMessage(newSessionId);
    }
  };

  const sendInitialMessage = async (sessionId: string) => {
    const cartSummary = cartItems.map(item => `${item.quantity}x ${item.name}`).join(", ");
    const initialMessage = `Hi! I need urgent assistance with my large purchase of ₦${cartTotal.toLocaleString()}. My cart contains: ${cartSummary}. Please help me complete this transaction safely.`;

    await supabase
      .from('chat_messages')
      .insert({
        session_id: sessionId,
        sender_type: 'user',
        sender_name: customerName,
        message: initialMessage
      });
  };

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from('chat_messages')
      .select('*')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: true });
    
    if (error) {
      console.error('Error fetching messages:', error);
    } else {
      setMessages((data || []) as ChatMessage[]);
    }
  };

  const subscribeToMessages = () => {
    const channel = supabase
      .channel(`customer-chat-${sessionId}`)
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'chat_messages',
        filter: `session_id=eq.${sessionId}`
      }, (payload) => {
        const newMsg = payload.new as ChatMessage;
        setMessages(prev => [...prev, newMsg]);
        
        if (newMsg.sender_type === 'admin') {
          toast({
            title: "Admin Reply",
            description: "You have a new message from our support team.",
          });
        }
      })
      .subscribe();

    return () => supabase.removeChannel(channel);
  };

  const sendMessage = async () => {
    if (!newMessage.trim() || !sessionId) return;

    setLoading(true);
    const { error } = await supabase
      .from('chat_messages')
      .insert({
        session_id: sessionId,
        sender_type: 'user',
        sender_name: customerName,
        message: newMessage.trim()
      });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to send message.",
        variant: "destructive",
      });
    } else {
      setNewMessage("");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="bg-white border-gray-200 h-[600px] flex flex-col">
        <CardHeader className="bg-red-50 border-b border-red-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-red-500 p-2 rounded-full">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-red-800">🚨 Priority Support Chat</CardTitle>
                <p className="text-red-600 text-sm">Large Transaction Assistance</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-red-800">₦{cartTotal.toLocaleString()}</p>
              <div className={`text-xs ${isConnected ? 'text-green-600' : 'text-red-600'}`}>
                {isConnected ? '● Connected' : '● Connecting...'}
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-0">
          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {!isConnected && (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500 mx-auto mb-4"></div>
                  <p className="text-gray-600">Connecting you to our priority support team...</p>
                </div>
              )}
              
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender_type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                      message.sender_type === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-800 border border-gray-200'
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      <User className="h-3 w-3" />
                      <span className="text-xs font-medium">
                        {message.sender_type === 'admin' ? '🎧 Support Agent' : 'You'}
                      </span>
                    </div>
                    <p className="text-sm">{message.message}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender_type === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {new Date(message.created_at).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Customer Info Bar */}
          <div className="bg-gray-50 px-4 py-2 border-t border-gray-200">
            <div className="flex items-center space-x-4 text-xs text-gray-600">
              <div className="flex items-center space-x-1">
                <User className="h-3 w-3" />
                <span>{customerName}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-3 w-3" />
                <span>{customerEmail}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3" />
                <span>{customerPhone}</span>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message to our support team..."
                className="flex-1"
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                disabled={loading || !isConnected}
              />
              <Button
                onClick={sendMessage}
                disabled={loading || !newMessage.trim() || !isConnected}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Our support agents are standing by to help with your large transaction
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerChat;