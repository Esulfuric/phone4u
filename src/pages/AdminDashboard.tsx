import { useEffect, useState } from "react";
import { useAdmin } from "@/context/AdminContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { phones } from "@/data";
import { Navigate } from "react-router-dom";

const AdminDashboard = () => {
  const { isAdmin, loading, signOut } = useAdmin();
  const [orders, setOrders] = useState([]);
  const [contactMessages, setContactMessages] = useState([]);
  const [editingPrices, setEditingPrices] = useState<Record<number, number>>({});

  useEffect(() => {
    if (isAdmin) {
      fetchOrders();
      fetchContactMessages();
    }
  }, [isAdmin]);

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

  const handlePriceEdit = (phoneId: number, newPrice: number) => {
    setEditingPrices(prev => ({
      ...prev,
      [phoneId]: newPrice
    }));
  };

  const savePriceEdit = (phoneId: number) => {
    // Note: This would typically update a database, but since we're using static data,
    // we'll just show a success message. In a real app, you'd update the database.
    console.log(`Price for phone ${phoneId} updated to ${editingPrices[phoneId]}`);
    alert('Price updated successfully! (Note: This is a demo - prices are static)');
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button onClick={signOut} variant="outline">
            Sign Out
          </Button>
        </div>

        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="products">Products & Prices</TabsTrigger>
            <TabsTrigger value="messages">Contact Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                {orders.length === 0 ? (
                  <p className="text-gray-500">No orders yet</p>
                ) : (
                  <div className="space-y-4">
                    {orders.map((order: any) => (
                      <div key={order.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold">{order.customer_name}</h3>
                            <p className="text-sm text-gray-600">{order.customer_email}</p>
                            <p className="text-sm text-gray-600">{order.customer_phone}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-brand-gold">
                              ₦{Number(order.total_amount).toLocaleString()}
                            </p>
                            <Badge variant={order.status === 'completed' ? 'default' : 'secondary'}>
                              {order.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm text-gray-600">
                            Items: {JSON.stringify(order.order_items)}
                          </p>
                          <p className="text-xs text-gray-500">
                            {new Date(order.created_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Product Prices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {phones.map((phone) => (
                    <div key={phone.id} className="border rounded-lg p-4">
                      <img 
                        src={phone.image} 
                        alt={phone.name}
                        className="w-full h-32 object-cover rounded-md mb-2"
                      />
                      <h3 className="font-semibold">{phone.name}</h3>
                      <p className="text-sm text-gray-600">{phone.brand}</p>
                      <div className="mt-2 space-y-2">
                        <Label htmlFor={`price-${phone.id}`}>Price (₦)</Label>
                        <div className="flex space-x-2">
                          <Input
                            id={`price-${phone.id}`}
                            type="number"
                            defaultValue={phone.price}
                            onChange={(e) => handlePriceEdit(phone.id, Number(e.target.value))}
                          />
                          <Button 
                            size="sm"
                            onClick={() => savePriceEdit(phone.id)}
                          >
                            Save
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Contact Messages</CardTitle>
              </CardHeader>
              <CardContent>
                {contactMessages.length === 0 ? (
                  <p className="text-gray-500">No messages yet</p>
                ) : (
                  <div className="space-y-4">
                    {contactMessages.map((message: any) => (
                      <div key={message.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold">{message.name}</h3>
                            <p className="text-sm text-gray-600">{message.email}</p>
                            {message.phone && (
                              <p className="text-sm text-gray-600">{message.phone}</p>
                            )}
                          </div>
                          <Badge variant={message.status === 'read' ? 'default' : 'secondary'}>
                            {message.status}
                          </Badge>
                        </div>
                        <p className="text-gray-700 mb-2">{message.message}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(message.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;