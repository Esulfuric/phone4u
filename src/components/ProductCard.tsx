
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

export interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
  brand: string;
  condition?: 'new' | 'used' | 'refurbished';
  inStock?: boolean;
}

const ProductCard = ({ product }: { product: ProductProps }) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      brand: product.brand
    });
    
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="overflow-hidden h-48 relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.condition && product.condition !== 'new' && (
            <Badge 
              variant="secondary" 
              className="absolute top-2 right-2 text-xs"
            >
              {product.condition.charAt(0).toUpperCase() + product.condition.slice(1)}
            </Badge>
          )}
        </div>
       <CardContent>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Storage and RAM (always shown) */}
    <div className="flex justify-between py-2">
      <span className="font-medium">Storage:</span>
      <span className="text-gray-600">{phone.specifications.storage}</span>
    </div>
    <div className="flex justify-between py-2">
      <span className="font-medium">RAM:</span>
      <span className="text-gray-600">{phone.specifications.ram}</span>
    </div>

    {/* Dynamic nested specs */}
    {Object.entries(phone.specifications).map(([key, value]) => {
      if (['storage', 'ram'].includes(key)) return null; // Skip already shown
      
      if (typeof value === 'object') {
        return (
          <div key={key} className="col-span-2">
            <h3 className="font-medium capitalize mb-2">
              {key.replace(/([A-Z])/g, ' $1').trim()}:
            </h3>
            <div className="grid grid-cols-2 gap-2 pl-4">
              {Object.entries(value).map(([subKey, subValue]) => (
                <div key={subKey} className="flex justify-between">
                  <span className="text-gray-600 capitalize">{subKey}:</span>
                  <span className="font-medium">{String(subValue)}</span>
                </div>
              ))}
            </div>
          </div>
        );
      }
      return null;
    })}
  </div>
</CardContent>
      </Link>
      <CardFooter className="border-t p-4 flex gap-2">
        <Button 
          onClick={handleAddToCart}
          className="flex-1 bg-black hover:bg-brand-gold text-white transition-colors"
          disabled={product.inStock === false}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
        <Button 
          asChild
          variant="outline" 
          size="icon"
          className="hover:bg-brand-gold hover:text-white transition-colors"
        >
          <Link to={`/product/${product.id}`}>
            <Eye className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
