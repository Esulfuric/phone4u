import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CustomerService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-10 w-10 text-black" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Large Transaction Security</h1>
            <p className="text-gray-600 text-lg">
              For your security, transactions of ₦500,000 and above require verification 
              with our customer service team.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Why This Security Measure?</CardTitle>
            </CardHeader>
            <CardContent className="text-left space-y-3">
              <p>• Protects you from unauthorized large transactions</p>
              <p>• Ensures proper verification of high-value purchases</p>
              <p>• Provides personalized support for significant investments</p>
              <p>• Guarantees secure processing of your order</p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-brand-gold" />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-brand-gold">+234 123 456 7890</p>
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

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-yellow-800 mb-2">What to Mention When You Contact Us:</h3>
            <ul className="text-left text-yellow-700 space-y-1">
              <li>• Your name and phone number</li>
              <li>• Items you want to purchase</li>
              <li>• Preferred payment method</li>
              <li>• Delivery address</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cart">
              <Button variant="outline" size="lg">
                ← Back to Cart
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="bg-brand-gold hover:bg-yellow-600 text-black">
                Contact Us Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;