
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

export interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
  brand: string;
}

const ProductCard = ({ product }: { product: ProductProps }) => {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg">
      <div className="overflow-hidden h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="text-sm text-gray-500 mb-1">{product.brand}</div>
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
        <div className="text-xl font-bold text-brand-gold">
          ₦{product.price.toLocaleString()}
        </div>
      </CardContent>
      <CardFooter className="border-t p-4">
        <Button className="w-full bg-black hover:bg-brand-gold text-white transition-colors">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
