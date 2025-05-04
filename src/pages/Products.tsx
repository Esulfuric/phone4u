
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import ProductCard, { ProductProps } from "@/components/ProductCard";
import { Filter, Search } from "lucide-react";

const allProducts: ProductProps[] = [
  {
    id: 1,
    name: "iPhone 14 Pro Max",
    price: 750000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    brand: "Apple"
  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    price: 650000,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    brand: "Samsung"
  },
  {
    id: 3,
    name: "Google Pixel 7 Pro",
    price: 450000,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    brand: "Google"
  },
  {
    id: 4,
    name: "OnePlus 11",
    price: 380000,
    image: "https://images.unsplash.com/photo-1591447337751-c7b95cf704ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    brand: "OnePlus"
  },
  {
    id: 5,
    name: "Xiaomi 13 Pro",
    price: 400000,
    image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    brand: "Xiaomi"
  },
  {
    id: 6,
    name: "iPhone 13",
    price: 500000,
    image: "https://images.unsplash.com/photo-1592286927505-1def25115558?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    brand: "Apple"
  },
  {
    id: 7,
    name: "Samsung Galaxy A53",
    price: 250000,
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    brand: "Samsung"
  },
  {
    id: 8,
    name: "Google Pixel 6a",
    price: 220000,
    image: "https://images.unsplash.com/photo-1551355738-a9e12993a8ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    brand: "Google"
  }
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [sortOrder, setSortOrder] = useState("default");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = allProducts
    .filter((product) => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedBrand === "all" || product.brand === selectedBrand) &&
      product.price >= priceRange[0] && product.price <= priceRange[1]
    )
    .sort((a, b) => {
      if (sortOrder === "price-asc") {
        return a.price - b.price;
      } else if (sortOrder === "price-desc") {
        return b.price - a.price;
      } else if (sortOrder === "name-asc") {
        return a.name.localeCompare(b.name);
      } else if (sortOrder === "name-desc") {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Products</h1>

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
          <div className="flex gap-2">
            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="name-asc">Name: A to Z</SelectItem>
                <SelectItem value="name-desc">Name: Z to A</SelectItem>
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters - Desktop */}
          <div className="hidden md:block bg-white p-6 rounded-lg shadow-sm h-fit">
            <h2 className="font-bold text-lg mb-4">Filters</h2>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Brand</h3>
              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger>
                  <SelectValue placeholder="All Brands" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Brands</SelectItem>
                  <SelectItem value="Apple">Apple</SelectItem>
                  <SelectItem value="Samsung">Samsung</SelectItem>
                  <SelectItem value="Google">Google</SelectItem>
                  <SelectItem value="OnePlus">OnePlus</SelectItem>
                  <SelectItem value="Xiaomi">Xiaomi</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-4">Price Range</h3>
              <Slider
                value={priceRange}
                min={0}
                max={1000000}
                step={10000}
                onValueChange={setPriceRange}
                className="mb-4"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>₦{priceRange[0].toLocaleString()}</span>
                <span>₦{priceRange[1].toLocaleString()}</span>
              </div>
            </div>
            
            <Button 
              onClick={() => {
                setSearchQuery("");
                setSelectedBrand("all");
                setPriceRange([0, 1000000]);
                setSortOrder("default");
              }}
              variant="outline"
              className="w-full"
            >
              Reset Filters
            </Button>
          </div>

          {/* Filters - Mobile */}
          {showFilters && (
            <div className="md:hidden bg-white p-6 rounded-lg shadow-sm mb-6">
              <h2 className="font-bold text-lg mb-4">Filters</h2>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Brand</h3>
                <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Brands" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Brands</SelectItem>
                    <SelectItem value="Apple">Apple</SelectItem>
                    <SelectItem value="Samsung">Samsung</SelectItem>
                    <SelectItem value="Google">Google</SelectItem>
                    <SelectItem value="OnePlus">OnePlus</SelectItem>
                    <SelectItem value="Xiaomi">Xiaomi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-4">Price Range</h3>
                <Slider
                  value={priceRange}
                  min={0}
                  max={1000000}
                  step={10000}
                  onValueChange={setPriceRange}
                  className="mb-4"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>₦{priceRange[0].toLocaleString()}</span>
                  <span>₦{priceRange[1].toLocaleString()}</span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedBrand("all");
                    setPriceRange([0, 1000000]);
                    setSortOrder("default");
                  }}
                  variant="outline"
                  className="flex-1"
                >
                  Reset
                </Button>
                <Button 
                  onClick={() => setShowFilters(false)}
                  className="flex-1 bg-brand-gold hover:bg-yellow-600 text-black"
                >
                  Apply
                </Button>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-10 text-center">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
