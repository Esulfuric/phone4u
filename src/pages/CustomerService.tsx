import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CustomerChat from "@/components/CustomerChat";

const CustomerService = () => {
  const [searchParams] = useSearchParams();
  const [showChat, setShowChat] = useState(false);
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "", 
    phone: "",
    cartTotal: 0,
    cartItems: []
  });

  useEffect(() => {
    // Check if this is a large transaction redirect
    const name = searchParams.get('name');
    const email = searchParams.get('email');
    const phone = searchParams.get('phone');
    const total = searchParams.get('total');
    const items = searchParams.get('items');

    if (name && email && phone && total && items) {
      setCustomerData({
        name,
        email,
        phone,
        cartTotal: Number(total),
        cartItems: JSON.parse(decodeURIComponent(items))
      });
      setShowChat(true);
    }
  }, [searchParams]);

  if (showChat) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold mb-2 text-red-800">🚨 Priority Support</h1>
            <p className="text-red-600 text-lg">
              You're connected to our live support team for your large transaction assistance
            </p>
          </div>
          
          <CustomerChat
            customerName={customerData.name}
            customerEmail={customerData.email}
            customerPhone={customerData.phone}
            cartTotal={customerData.cartTotal}
            cartItems={customerData.cartItems}
          />

          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              Having other issues? You can also use our{" "}
              <Link to="/contact" className="text-blue-600 underline hover:text-blue-800">
                general contact form
              </Link>{" "}
              for non-urgent inquiries.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-10 w-10 text-black" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Customer Service</h1>
            <p className="text-gray-600 text-lg">
              Get in touch with our support team for any assistance you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-brand-gold" />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-brand-gold">+234 705 633 0100</p>
                <p className="text-sm text-gray-600 mt-2">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 5:00 PM
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-brand-gold" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">support@phone4u.com.ng</p>
                <p className="text-sm text-gray-600 mt-2">
                  We'll respond within 24 hours
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cart">
              <Button variant="outline" size="lg">
                ← Back to Cart
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="bg-brand-gold hover:bg-yellow-600 text-black">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;