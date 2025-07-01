
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, Search, Smartphone, Headphones, Watch, Gamepad2 } from "lucide-react";
import { getPhonesByCategory, searchPhones } from "@/data/phones";
import ProductCard from "@/components/ProductCard";

const categories = [
  { id: "all", name: "All Products", icon: Smartphone },
  { id: "smartphones", name: "Smartphones", icon: Smartphone },
  { id: "accessories", name: "Accessories", icon: Headphones },
  { id: "smartwatches", name: "Smart Watches", icon: Watch },
  { id: "gaming", name: "Gaming", icon: Gamepad2 }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const getFilteredPhones = () => {
    let phones = searchQuery ? searchPhones(searchQuery) : getPhonesByCategory(selectedCategory);
    
    // Filter by price range
    if (priceRange !== "all") {
      phones = phones.filter(phone => {
        switch (priceRange) {
          case "under-100k":
            return phone.price < 100000;
          case "100k-300k":
            return phone.price >= 100000 && phone.price <= 300000;
          case "300k-500k":
            return phone.price >= 300000 && phone.price <= 500000;
          case "500k-700k":
            return phone.price >= 500000 && phone.price <= 700000;
          case "above-700k":
            return phone.price > 700000;
          default:
            return true;
        }
      });
    }
    
    return phones;
  };

  const filteredPhones = getFilteredPhones();

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
          
          <Select value={priceRange} onValueChange={setPriceRange}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Prices</SelectItem>
              <SelectItem value="under-100k">Under ₦100,000</SelectItem>
              <SelectItem value="100k-300k">₦100,000 - ₦300,000</SelectItem>
              <SelectItem value="300k-500k">₦300,000 - ₦500,000</SelectItem>
              <SelectItem value="500k-700k">₦500,000 - ₦700,000</SelectItem>
              <SelectItem value="above-700k">Above ₦700,000</SelectItem>
            </SelectContent>
          </Select>
          
          <Button 
            variant="outline" 
            className="md:hidden"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-5 w-5" />
          </Button>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isActive = selectedCategory === category.id;
            return (
              <div
                key={category.id}
                className={`bg-white rounded-lg shadow-sm p-4 hover:shadow-lg transition-all cursor-pointer border-2 ${
                  isActive ? 'border-brand-gold bg-brand-gold/5' : 'border-transparent hover:border-brand-gold/50'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`p-3 rounded-full mb-2 ${
                    isActive ? 'bg-brand-gold text-white' : 'bg-brand-gold/10 text-brand-gold'
                  }`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium text-sm">{category.name}</h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Products Grid */}
        {filteredPhones.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhones.map((phone) => (
              <ProductCard key={phone.id} product={phone} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="max-w-md mx-auto">
              <Smartphone className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">No Products Found</h3>
              <p className="text-gray-500 mb-6">
                {searchQuery 
                  ? `No products found matching "${searchQuery}". Try different keywords.` 
                  : "No products available in this category at the moment."}
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setPriceRange("all");
                }}
                className="bg-brand-gold hover:bg-yellow-600 text-black"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
