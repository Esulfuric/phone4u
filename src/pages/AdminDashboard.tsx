import { useEffect, useState } from "react";
import { useAdmin } from "@/context/AdminContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Navigate, Link } from "react-router-dom";
import { MessageCircle, Package, ShoppingCart, Settings, Users, Bell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AdminChatPanel from "@/components/AdminChatPanel";

const AdminDashboard = () => {
  const { isAdmin, loading, signOut, user } = useAdmin();
  const { toast } = useToast();
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [contactMessages, setContactMessages] = useState([]);
  const [chatSessions, setChatSessions] = useState([]);
  const [activeTab, setActiveTab] = useState("overview");
  const [notifications, setNotifications] = useState(0);

  useEffect(() => {
    if (isAdmin) {
      fetchAllData();
      subscribeToNotifications();
    }
  }, [isAdmin]);

  const fetchAllData = async () => {
    await Promise.all([
      fetchOrders(),
      fetchProducts(),
      fetchContactMessages(),
      fetchChatSessions()
    ]);
  };

  const fetchOrders = async () => {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching orders:', error);
    } else {
      setOrders(data || []);
    }
  };

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('name');
    
    if (error) {
      console.error('Error fetching products:', error);
    } else {
      setProducts(data || []);
    }
  };

  const fetchContactMessages = async () => {
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching contact messages:', error);
    } else {
      setContactMessages(data || []);
    }
  };

  const fetchChatSessions = async () => {
    const { data, error } = await supabase
      .from('chat_sessions')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching chat sessions:', error);
    } else {
      setChatSessions(data || []);
    }
  };

  const subscribeToNotifications = () => {
    const channel = supabase
      .channel('admin-notifications')
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'orders'
      }, () => {
        setNotifications(prev => prev + 1);
        fetchOrders();
        toast({
          title: "New Order!",
          description: "A new order has been placed.",
        });
      })
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'chat_sessions'
      }, () => {
        setNotifications(prev => prev + 1);
        fetchChatSessions();
        toast({
          title: "New Chat Session!",
          description: "A customer needs urgent support.",
        });
      })
      .subscribe();

    return () => supabase.removeChannel(channel);
  };

  const updateOrderStatus = async (orderId: string, status: string) => {
    const { error } = await supabase
      .from('orders')
      .update({ status })
      .eq('id', orderId);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update order status.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Order status updated successfully.",
      });
      fetchOrders();
    }
  };

  const updateProduct = async (productId: number, updates: any) => {
    const { error } = await supabase
      .from('products')
      .update(updates)
      .eq('id', productId);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update product.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Product updated successfully.",
      });
      fetchProducts();
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-slate-900">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/admin/signin" replace />;
  }

  const pendingOrders = orders.filter((order: any) => order.status === 'pending').length;
  const activeChatSessions = chatSessions.filter((session: any) => session.status === 'active').length;
  const lowStockProducts = products.filter((product: any) => product.stock_quantity < 5).length;

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Admin Header */}
      <div className="bg-slate-800 border-b border-slate-700 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Settings className="h-6 w-6 text-brand-gold" />
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            </div>
            {notifications > 0 && (
              <div className="flex items-center space-x-1 bg-red-500 px-2 py-1 rounded-full text-xs">
                <Bell className="h-3 w-3" />
                <span>{notifications}</span>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-slate-300">Welcome, Admin</span>
            <Button onClick={signOut} variant="outline" size="sm">
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      {/* Admin Content */}
      <div className="p-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Pending Orders</p>
                  <p className="text-2xl font-bold text-white">{pendingOrders}</p>
                </div>
                <ShoppingCart className="h-8 w-8 text-brand-gold" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Active Chats</p>
                  <p className="text-2xl font-bold text-white">{activeChatSessions}</p>
                </div>
                <MessageCircle className="h-8 w-8 text-brand-gold" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Low Stock</p>
                  <p className="text-2xl font-bold text-white">{lowStockProducts}</p>
                </div>
                <Package className="h-8 w-8 text-red-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Total Products</p>
                  <p className="text-2xl font-bold text-white">{products.length}</p>
                </div>
                <Users className="h-8 w-8 text-brand-gold" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-slate-800">
            <TabsTrigger value="overview" className="data-[state=active]:bg-brand-gold data-[state=active]:text-black">
              Overview
            </TabsTrigger>
            <TabsTrigger value="orders" className="data-[state=active]:bg-brand-gold data-[state=active]:text-black">
              Orders ({pendingOrders})
            </TabsTrigger>
            <TabsTrigger value="products" className="data-[state=active]:bg-brand-gold data-[state=active]:text-black">
              Products
            </TabsTrigger>
            <TabsTrigger value="chat" className="data-[state=active]:bg-brand-gold data-[state=active]:text-black">
              Live Chat ({activeChatSessions})
            </TabsTrigger>
            <TabsTrigger value="messages" className="data-[state=active]:bg-brand-gold data-[state=active]:text-black">
              Messages
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {orders.slice(0, 5).map((order: any) => (
                      <div key={order.id} className="flex justify-between items-center p-3 bg-slate-700 rounded">
                        <div>
                          <p className="text-white font-medium">{order.customer_name}</p>
                          <p className="text-slate-400 text-sm">₦{Number(order.total_amount).toLocaleString()}</p>
                        </div>
                        <Badge variant={order.status === 'completed' ? 'default' : 'secondary'}>
                          {order.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Low Stock Alert</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {products.filter(p => p.stock_quantity < 5).slice(0, 5).map((product: any) => (
                      <div key={product.id} className="flex justify-between items-center p-3 bg-red-900/20 rounded border border-red-500/30">
                        <div>
                          <p className="text-white font-medium">{product.name}</p>
                          <p className="text-red-400 text-sm">Only {product.stock_quantity} left</p>
                        </div>
                        <Button size="sm" onClick={() => setActiveTab("products")}>
                          Restock
                        </Button>
                      </div>
                    ))}
                    {products.filter(p => p.stock_quantity < 5).length === 0 && (
                      <p className="text-slate-400 text-center py-4">All products are well stocked!</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-4">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Order Management</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-slate-700">
                      <TableHead className="text-slate-300">Customer</TableHead>
                      <TableHead className="text-slate-300">Amount</TableHead>
                      <TableHead className="text-slate-300">Items</TableHead>
                      <TableHead className="text-slate-300">Status</TableHead>
                      <TableHead className="text-slate-300">Date</TableHead>
                      <TableHead className="text-slate-300">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order: any) => (
                      <TableRow key={order.id} className="border-slate-700">
                        <TableCell className="text-white">
                          <div>
                            <p className="font-medium">{order.customer_name}</p>
                            <p className="text-sm text-slate-400">{order.customer_email}</p>
                            <p className="text-sm text-slate-400">{order.customer_phone}</p>
                          </div>
                        </TableCell>
                        <TableCell className="text-brand-gold font-bold">
                          ₦{Number(order.total_amount).toLocaleString()}
                        </TableCell>
                        <TableCell className="text-slate-300">
                          {JSON.parse(order.order_items).length} items
                        </TableCell>
                        <TableCell>
                          <Badge variant={order.status === 'completed' ? 'default' : 'secondary'}>
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-slate-400">
                          {new Date(order.created_at).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            {order.status === 'pending' && (
                              <Button
                                size="sm"
                                onClick={() => updateOrderStatus(order.id, 'confirmed')}
                              >
                                Confirm
                              </Button>
                            )}
                            {order.status === 'confirmed' && (
                              <Button
                                size="sm"
                                onClick={() => updateOrderStatus(order.id, 'completed')}
                              >
                                Complete
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-4">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Product & Stock Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {products.map((product: any) => (
                    <div key={product.id} className="border border-slate-700 rounded-lg p-4 bg-slate-700/50">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-32 object-cover rounded-md mb-2"
                      />
                      <h3 className="font-semibold text-white">{product.name}</h3>
                      <p className="text-sm text-slate-400">{product.brand}</p>
                      
                      <div className="mt-3 space-y-3">
                        <div className="flex items-center justify-between">
                          <Label className="text-slate-300">Price (₦)</Label>
                          <Input
                            type="number"
                            defaultValue={product.price}
                            className="w-24 h-8 bg-slate-600 border-slate-500 text-white"
                            onBlur={(e) => {
                              const newPrice = Number(e.target.value);
                              if (newPrice !== product.price) {
                                updateProduct(product.id, { price: newPrice });
                              }
                            }}
                          />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <Label className="text-slate-300">Stock</Label>
                          <Input
                            type="number"
                            defaultValue={product.stock_quantity}
                            className="w-24 h-8 bg-slate-600 border-slate-500 text-white"
                            onBlur={(e) => {
                              const newStock = Number(e.target.value);
                              if (newStock !== product.stock_quantity) {
                                updateProduct(product.id, { 
                                  stock_quantity: newStock,
                                  in_stock: newStock > 0
                                });
                              }
                            }}
                          />
                        </div>
                        
                        {product.stock_quantity < 5 && (
                          <div className="bg-red-900/30 border border-red-500/50 rounded p-2">
                            <p className="text-red-400 text-xs">⚠️ Low stock alert!</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chat">
            <AdminChatPanel />
          </TabsContent>

          <TabsContent value="messages" className="space-y-4">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Contact Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactMessages.map((message: any) => (
                    <div key={message.id} className="border border-slate-700 rounded-lg p-4 bg-slate-700/50">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-white">{message.name}</h3>
                          <p className="text-sm text-slate-400">{message.email}</p>
                          {message.phone && (
                            <p className="text-sm text-slate-400">{message.phone}</p>
                          )}
                        </div>
                        <Badge variant={message.status === 'read' ? 'default' : 'secondary'}>
                          {message.status}
                        </Badge>
                      </div>
                      <p className="text-slate-300 mb-2">{message.message}</p>
                      <p className="text-xs text-slate-500">
                        {new Date(message.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;