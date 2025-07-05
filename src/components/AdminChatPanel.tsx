import { useState, useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, User, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ChatSession {
  id: string;
  session_id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  cart_total: number;
  cart_items: any;
  status: string;
  admin_assigned: string;
  created_at: string;
  updated_at: string;
}

interface ChatMessage {
  id: string;
  session_id: string;
  sender_type: 'admin' | 'user';
  sender_name: string;
  message: string;
  created_at: string;
}

const AdminChatPanel = () => {
  const { toast } = useToast();
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([]);
  const [selectedSession, setSelectedSession] = useState<ChatSession | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchChatSessions();
    subscribeToChats();
  }, []);

  useEffect(() => {
    if (selectedSession) {
      fetchMessages(selectedSession.session_id);
    }
  }, [selectedSession]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fetchChatSessions = async () => {
    const { data, error } = await supabase
      .from('chat_sessions')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching chat sessions:', error);
    } else {
      setChatSessions((data || []) as ChatSession[]);
    }
  };

  const fetchMessages = async (sessionId: string) => {
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

  const subscribeToChats = () => {
    const channel = supabase
      .channel('admin-chat-updates')
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'chat_sessions'
      }, (payload) => {
        setChatSessions(prev => [payload.new as ChatSession, ...prev]);
        toast({
          title: "New Chat Session!",
          description: `${(payload.new as ChatSession).customer_name} needs urgent support.`,
        });
      })
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'chat_messages'
      }, (payload) => {
        const newMsg = payload.new as ChatMessage;
        if (selectedSession && newMsg.session_id === selectedSession.session_id) {
          setMessages(prev => [...prev, newMsg]);
        }
        if (newMsg.sender_type === 'user') {
          toast({
            title: "New Message",
            description: `New message from ${newMsg.sender_name}`,
          });
        }
      })
      .subscribe();

    return () => supabase.removeChannel(channel);
  };

  const sendMessage = async () => {
    if (!newMessage.trim() || !selectedSession) return;

    setLoading(true);
    const { error } = await supabase
      .from('chat_messages')
      .insert({
        session_id: selectedSession.session_id,
        sender_type: 'admin',
        sender_name: 'Admin',
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

  const updateSessionStatus = async (sessionId: string, status: string) => {
    const { error } = await supabase
      .from('chat_sessions')
      .update({ status })
      .eq('session_id', sessionId);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update session status.",
        variant: "destructive",
      });
    } else {
      fetchChatSessions();
      toast({
        title: "Success",
        description: "Session status updated.",
      });
    }
  };

  const activeSessions = chatSessions.filter(s => s.status === 'active');
  const completedSessions = chatSessions.filter(s => s.status !== 'active');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
      {/* Chat Sessions List */}
      <div className="lg:col-span-1">
        <Card className="bg-slate-800 border-slate-700 h-full">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <MessageCircle className="h-5 w-5 mr-2" />
              Chat Sessions ({activeSessions.length} active)
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[500px]">
              <div className="p-4 space-y-3">
                {/* Active Sessions */}
                <div className="text-sm font-medium text-slate-300 mb-2">Active Sessions</div>
                {activeSessions.map((session) => (
                  <div
                    key={session.id}
                    className={`p-3 rounded-lg cursor-pointer transition-colors border ${
                      selectedSession?.id === session.id
                        ? 'bg-brand-gold/20 border-brand-gold'
                        : 'bg-slate-700/50 border-slate-600 hover:bg-slate-700'
                    }`}
                    onClick={() => setSelectedSession(session)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-white text-sm">{session.customer_name}</h4>
                      <Badge variant="destructive" className="text-xs">
                        URGENT
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-400">{session.customer_email}</p>
                    <p className="text-xs text-brand-gold font-bold">
                      ₦{Number(session.cart_total).toLocaleString()}
                    </p>
                    <div className="flex items-center text-xs text-slate-500 mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      {new Date(session.created_at).toLocaleTimeString()}
                    </div>
                  </div>
                ))}

                {activeSessions.length === 0 && (
                  <p className="text-slate-400 text-sm text-center py-4">No active sessions</p>
                )}

                {/* Completed Sessions */}
                {completedSessions.length > 0 && (
                  <>
                    <div className="text-sm font-medium text-slate-300 mb-2 mt-6">Recent Sessions</div>
                    {completedSessions.slice(0, 5).map((session) => (
                      <div
                        key={session.id}
                        className={`p-3 rounded-lg cursor-pointer transition-colors border ${
                          selectedSession?.id === session.id
                            ? 'bg-slate-600 border-slate-500'
                            : 'bg-slate-700/30 border-slate-600 hover:bg-slate-700/50'
                        }`}
                        onClick={() => setSelectedSession(session)}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-white text-sm">{session.customer_name}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {session.status}
                          </Badge>
                        </div>
                        <p className="text-xs text-slate-400">₦{Number(session.cart_total).toLocaleString()}</p>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Chat Interface */}
      <div className="lg:col-span-2">
        {selectedSession ? (
          <Card className="bg-slate-800 border-slate-700 h-full flex flex-col">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-white text-lg">{selectedSession.customer_name}</CardTitle>
                  <p className="text-slate-400 text-sm">{selectedSession.customer_email}</p>
                  <p className="text-slate-400 text-sm">{selectedSession.customer_phone}</p>
                </div>
                <div className="text-right">
                  <p className="text-brand-gold font-bold text-lg">
                    ₦{Number(selectedSession.cart_total).toLocaleString()}
                  </p>
                  <div className="flex space-x-2 mt-2">
                    {selectedSession.status === 'active' && (
                      <Button
                        size="sm"
                        onClick={() => updateSessionStatus(selectedSession.session_id, 'completed')}
                      >
                        Mark Complete
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender_type === 'admin' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.sender_type === 'admin'
                            ? 'bg-brand-gold text-black'
                            : 'bg-slate-700 text-white'
                        }`}
                      >
                        <div className="flex items-center space-x-2 mb-1">
                          <User className="h-3 w-3" />
                          <span className="text-xs font-medium">{message.sender_name}</span>
                        </div>
                        <p className="text-sm">{message.message}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender_type === 'admin' ? 'text-black/70' : 'text-slate-400'
                        }`}>
                          {new Date(message.created_at).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Message Input */}
              <div className="p-4 border-t border-slate-700">
                <div className="flex space-x-2">
                  <Input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 bg-slate-700 border-slate-600 text-white"
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    disabled={loading}
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={loading || !newMessage.trim()}
                    className="bg-brand-gold hover:bg-yellow-600 text-black"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-slate-800 border-slate-700 h-full flex items-center justify-center">
            <div className="text-center text-slate-400">
              <MessageCircle className="h-12 w-12 mx-auto mb-4" />
              <p>Select a chat session to start messaging</p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdminChatPanel;