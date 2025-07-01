
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
        <CardContent className="p-4">
          <div className="text-sm text-gray-500 mb-1">{product.brand}</div>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-brand-gold transition-colors">
            {product.name}
          </h3>
          <div className="text-xl font-bold text-brand-gold">
            ₦{product.price.toLocaleString()}
          </div>
          {product.inStock === false && (
            <div className="text-red-500 text-sm mt-1">Out of Stock</div>
          )}
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
