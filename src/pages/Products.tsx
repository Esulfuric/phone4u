
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, Search, Smartphone, Headphones, Watch, Gamepad2 } from "lucide-react";

const categories = [
  { id: "smartphones", name: "Smartphones", icon: Smartphone },
  { id: "accessories", name: "Accessories", icon: Headphones },
  { id: "smartwatches", name: "Smart Watches", icon: Watch },
  { id: "gaming", name: "Gaming", icon: Gamepad2 }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Shop by Category</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button 
            variant="outline" 
            className="md:hidden"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-5 w-5" />
          </Button>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-brand-gold"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-brand-gold/10 p-4 rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-brand-gold" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                  <p className="text-gray-500 text-sm">Coming Soon</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <div className="max-w-md mx-auto">
            <Smartphone className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium mb-2">Products Coming Soon</h3>
            <p className="text-gray-500 mb-6">
              We're currently updating our inventory. Please check back soon for the latest phones and accessories.
            </p>
            <Button className="bg-brand-gold hover:bg-yellow-600 text-black">
              Notify Me When Available
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
