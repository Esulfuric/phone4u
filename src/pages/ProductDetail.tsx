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

  // Helper function to render nested specifications
// Replace your current renderSpecifications function with this:
const renderSpecifications = (specs: any) => {
  // If specs is just {storage: "...", ram: "..."} (old format)
  if (specs.storage && specs.ram && Object.keys(specs).length === 2) {
    return (
      <>
        <div className="flex justify-between py-2">
          <span className="font-medium">Storage:</span>
          <span className="text-gray-600">{specs.storage}</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="font-medium">RAM:</span>
          <span className="text-gray-600">{specs.ram}</span>
        </div>
      </>
    );
  }

  // For the new nested format
  return Object.entries(specs).map(([category, details]) => {
    if (typeof details === 'object' && details !== null) {
      return (
        <div key={category} className="col-span-2">
          <h3 className="font-medium capitalize mb-2">
            {category.replace(/([A-Z])/g, ' $1').trim()}:
          </h3>
          <div className="grid grid-cols-2 gap-2 pl-4">
            {Object.entries(details).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="text-gray-600 capitalize">{key}:</span>
                <span className="font-medium">{value as string}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return (
      <div key={category} className="flex justify-between py-2">
        <span className="font-medium capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}:</span>
        <span className="text-gray-600">{details as string}</span>
      </div>
    );
  });
};

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
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
              className="w-full h-96 object-cover rounded-lg"
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

            {phone.storage && (
              <div className="mb-4">
                <span className="text-sm font-medium text-gray-600">Storage: </span>
                <span className="text-sm">{phone.storage}</span>
              </div>
            )}

            {phone.ram && (
              <div className="mb-6">
                <span className="text-sm font-medium text-gray-600">RAM: </span>
                <span className="text-sm">{phone.ram}</span>
              </div>
            )}

            <Button 
              onClick={handleAddToCart}
              className="w-full bg-black hover:bg-brand-gold text-white mb-6"
              disabled={!phone.inStock}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              {phone.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>

            {/* Features */}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {renderSpecifications(phone.specifications)}
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
