
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProductCard, { ProductProps } from "@/components/ProductCard";
import { Phone, Smartphone, Headphones, Map, MapPin, Battery, Wifi, Usb } from "lucide-react";

const featuredProducts: ProductProps[] = [
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
  }
];

const categories = [
  { name: "Smartphones", icon: <Smartphone className="h-8 w-8" /> },
  { name: "Accessories", icon: <Headphones className="h-8 w-8" /> },
  { name: "USB Devices", icon: <Usb className="h-8 w-8" /> },
  { name: "Wifi & Network", icon: <Wifi className="h-8 w-8" /> },
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const bannerImages = [
    "https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1505739998589-00fc191ce01d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[60vh] overflow-hidden">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        ))}
        
        <div className="container mx-auto h-full flex flex-col items-center justify-center text-center text-white relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to <span className="text-brand-gold">Phone4u</span></h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">Your premier destination for mobile phones and accessories in Lagos</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-gold hover:bg-yellow-600 text-black">
              <Link to="/products">Explore Products</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        {/* Hero Banner Nav Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                index === currentImage ? "bg-brand-gold" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="mb-4 flex justify-center">
                  <div className="bg-gray-100 p-4 rounded-full group-hover:bg-brand-gold group-hover:text-white transition-colors">
                    {category.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-lg">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Button asChild variant="link" className="text-brand-gold font-semibold">
              <Link to="/products">View All</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Banner */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Special Offer!</h2>
              <p className="text-xl mb-6">Get up to 20% off on selected smartphones this month. Visit our store today!</p>
              <Button asChild className="bg-brand-gold hover:bg-yellow-600 text-black">
                <Link to="/products">Shop Now</Link>
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="bg-brand-gold/20 rounded-full h-64 w-64 flex items-center justify-center animate-float">
                  <div className="bg-brand-gold/30 rounded-full h-48 w-48 flex items-center justify-center">
                    <Smartphone className="h-24 w-24 text-brand-gold" />
                  </div>
                </div>
                <div className="absolute -top-5 -right-5 bg-brand-gold text-black rounded-full h-20 w-20 flex items-center justify-center text-center font-bold">
                  20% OFF
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden h-[400px] shadow-lg">
                {/* This would ideally be a Google Map, but using an image for now */}
                <img 
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  alt="Store Location"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Visit Our Store</h2>
              <div className="flex items-start mb-4">
                <MapPin className="h-6 w-6 text-brand-gold mr-3 shrink-0" />
                <p className="text-gray-700">123 Computer Village, Ikeja, Lagos, Nigeria</p>
              </div>
              <p className="text-gray-700 mb-6">
                Visit our physical store for personalized service and exclusive in-store offers. 
                Our expert team is ready to help you find the perfect device.
              </p>
              <h3 className="font-semibold text-xl mb-4">Opening Hours:</h3>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
              <Button asChild className="bg-black hover:bg-brand-gold text-white">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
