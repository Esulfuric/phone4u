
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const { items, total, itemCount, removeItem, updateQuantity, clearCart } = useCart();
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleCheckout = () => {
    if (!userDetails.name || !userDetails.email || !userDetails.phone) {
      alert("Please fill in all your details before proceeding to checkout.");
      return;
    }

    // Check if total is 500,000 or above - redirect to customer service
    if (total >= 500000) {
      window.location.href = "/customer-service";
      return;
    }

    // Create cart summary
    const cartSummary = items.map(item => `${item.quantity}x ${item.name}`).join(", ");

    // @ts-ignore - FlutterwaveCheckout is loaded via script tag
    FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-a576448a90ccd3f41a0885368e1e692a-X",
      tx_ref: "phone4u_" + Date.now(),
      amount: total,
      currency: "NGN",
      payment_options: "card,banktransfer,ussd",
      customer: {
        email: userDetails.email,
        phone_number: userDetails.phone,
        name: userDetails.name,
      },
      customizations: {
        title: "Phone4U Nigeria",
        description: `Order: ${cartSummary}`,
        logo: "https://phone4u.com.ng/lovable-uploads/d8952835-0483-4d9b-ba3e-6d83bac0fdc2.png"
      },
      callback: function (response) {
        console.log(response);
        alert("Payment successful!");
        clearCart();
      },
      onclose: function () {
        console.log("Payment closed.");
      },
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-6">Add some products to get started!</p>
            <Link to="/products">
              <Button className="bg-brand-gold hover:bg-yellow-600 text-black">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Shopping Cart ({itemCount} items)</h1>
            <Button
              variant="outline"
              onClick={clearCart}
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear Cart
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-grow">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.brand}</p>
                        <p className="text-lg font-bold text-brand-gold">
                          ₦{item.price.toLocaleString()}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1 space-y-4">
              {/* Customer Details Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Customer Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={userDetails.name}
                      onChange={(e) => setUserDetails({...userDetails, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={userDetails.email}
                      onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={userDetails.phone}
                      onChange={(e) => setUserDetails({...userDetails, phone: e.target.value})}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₦{total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-brand-gold">₦{total.toLocaleString()}</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-black hover:bg-brand-gold text-white"
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
                  </Button>
                  <Link to="/products">
                    <Button variant="outline" className="w-full">
                      Continue Shopping
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
