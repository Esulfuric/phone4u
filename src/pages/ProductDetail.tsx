import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ShoppingCart, Check, Star, Shield, Truck, RefreshCw } from "lucide-react";
import { getPhoneById, getRelatedPhones } from "@/data/phones";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const { toast } = useToast();
  
  const phone = getPhoneById(Number(id));
  const relatedPhones = phone ? getRelatedPhones(phone) : [];

  // Debugging
  useEffect(() => {
    console.log("Current phone:", phone);
  }, [phone]);

  if (!phone) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Button asChild>
              <Link to="/products">Back to Products</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: phone.id,
      name: phone.name,
      price: phone.price,
      image: phone.image,
      brand: phone.brand
    });
    toast({
      title: "Added to cart!",
      description: `${phone.name} has been added to your cart.`,
    });
  };

  const renderSpecItem = (label: string, value: string | number) => (
    <div className="flex justify-between py-1">
      <span className="font-medium">{label}:</span>
      <span className="text-gray-600">{value}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <img
              src={phone.image}
              alt={phone.name}
              className="w-full h-96 object-contain rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">{phone.brand}</Badge>
              <Badge variant={phone.condition === 'new' ? 'default' : 'outline'}>
                {phone.condition.charAt(0).toUpperCase() + phone.condition.slice(1)}
              </Badge>
              {phone.inStock && (
                <Badge variant="outline" className="text-green-600 border-green-600">
                  <Check className="mr-1 h-3 w-3" />
                  In Stock
                </Badge>
              )}
            </div>

            <h1 className="text-3xl font-bold mb-2">{phone.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-600">(4.5/5 based on 127 reviews)</span>
            </div>

            <div className="text-4xl font-bold text-brand-gold mb-4">
              ₦{phone.price.toLocaleString()}
            </div>

            <p className="text-gray-700 mb-6">{phone.description}</p>

            {phone.storage && renderSpecItem("Storage", phone.storage)}
            {phone.ram && renderSpecItem("RAM", phone.ram)}

            <Button 
              onClick={handleAddToCart}
              className="w-full bg-black hover:bg-brand-gold text-white mb-6"
              disabled={!phone.inStock}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              {phone.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-brand-gold" />
                <span className="text-sm">1 Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-brand-gold" />
                <span className="text-sm">Free Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5 text-brand-gold" />
                <span className="text-sm">7 Day Return</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        {phone.specifications && (
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Debug output - visible only in development */}
                {process.env.NODE_ENV === 'development' && (
                  <pre className="text-xs bg-gray-100 p-2 rounded hidden">
                    {JSON.stringify(phone.specifications, null, 2)}
                  </pre>
                )}

                {/* Always show storage and RAM */}
                {phone.specifications.storage && renderSpecItem("Storage", phone.specifications.storage)}
                {phone.specifications.ram && renderSpecItem("RAM", phone.specifications.ram)}

                {/* Dynamic nested specs */}
                {Object.entries(phone.specifications).map(([key, value]) => {
                  if (['storage', 'ram'].includes(key)) return null;
                  
                  if (typeof value === 'object' && value !== null) {
                    return (
                      <div key={key} className="pt-2">
                        <h3 className="font-medium capitalize mb-1">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </h3>
                        <div className="pl-4 space-y-1">
                          {Object.entries(value).map(([subKey, subValue]) => (
                            renderSpecItem(subKey, String(subValue))
                          ))}
                        </div>
                      </div>
                    );
                  }
                  return renderSpecItem(key, String(value));
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Related Products */}
        {relatedPhones.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedPhones.map((relatedPhone) => (
                <ProductCard key={relatedPhone.id} product={relatedPhone} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
