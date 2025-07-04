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
            <h1 className="text-3xl font-bold mb-4">Urgent: Large Transaction Assistance</h1>
            <p className="text-gray-600 text-lg">
              You're making a large purchase of ₦500,000 or more. Our team is standing by to assist you with immediate support.
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-red-800 mb-3 text-lg">🚨 Priority Support Needed</h3>
            <p className="text-red-700">
              Large transactions require immediate assistance for your security and to ensure smooth processing. 
              Our representatives are available now to help complete your purchase safely.
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

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-green-800 mb-2">📞 Call Now for Instant Help:</h3>
            <ul className="text-left text-green-700 space-y-1">
              <li>• Your cart total and items</li>
              <li>• Your contact information</li>
              <li>• Payment method preference</li>
              <li>• Delivery location</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <p className="text-blue-800 text-sm">
              <strong>Have other questions?</strong> For general inquiries not related to large transactions, 
              you can use our regular <Link to="/contact" className="text-blue-600 underline hover:text-blue-800">contact form</Link>.
            </p>
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