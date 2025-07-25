import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { phones } from "@/data";
import { Smartphone, Tablet, Wifi, Usb } from "lucide-react";
import AdminSignIn from "@/components/AdminSignIn";
import { useAdmin } from "@/context/AdminContext";

// Get featured products (top 4 most expensive phones)
const featuredProducts = phones
  .sort((a, b) => b.price - a.price)
  .slice(0, 4);

const categories = [
  { name: "Smartphones", icon: <Smartphone className="h-8 w-8" /> },
  { name: "Tablets", icon: <Tablet className="h-8 w-8" /> },
  { name: "USB Devices", icon: <Usb className="h-8 w-8" /> },
  { name: "Wifi & Network", icon: <Wifi className="h-8 w-8" /> },
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const { isAdmin } = useAdmin();
  const bannerImages = [
    "https://sdmntprwestus.oaiusercontent.com/files/00000000-b720-6230-a36d-601387d8c9ad/raw?se=2025-07-03T19%3A58%3A19Z&sp=r&sv=2024-08-04&sr=b&scid=e36e0cc5-7478-58b1-9768-1ff15af5fe36&skoid=1e6af1bf-6b08-4a04-8919-15773e7e7024&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-03T00%3A37%3A47Z&ske=2025-07-04T00%3A37%3A47Z&sks=b&skv=2024-08-04&sig=hy1RQ3KfWrWtpWBL64GZSrXfvEP4GM/w%2BaGlvwbPKp0%3D",
    "https://www.shutterstock.com/image-photo/online-customer-satisfaction-survey-service-260nw-2480519563.jpg",
    "https://sdmntprwestus.oaiusercontent.com/files/00000000-2244-6230-8188-f211e39036a7/raw?se=2025-07-03T20%3A39%3A44Z&sp=r&sv=2024-08-04&sr=b&scid=2d636fd5-15bd-553f-ae48-f03aef784c55&skoid=1e6af1bf-6b08-4a04-8919-15773e7e7024&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-03T15%3A12%3A19Z&ske=2025-07-04T15%3A12%3A19Z&sks=b&skv=2024-08-04&sig=QKh2RpYmxCJv%2BSRIfABJmRXclvUgHPhfqlF1gubjs18%3D"
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
                <div className="h-6 w-6 text-brand-gold mr-3 shrink-0">📍</div>
                <p className="text-gray-700">1, Akowonjo Road, Egbeda, Lagos</p>
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

      {/* Admin Sign In Section - Bottom of page */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            {isAdmin ? (
              <Link to="/admin">
                <Button variant="outline" size="sm">
                  Go to Admin Dashboard
                </Button>
              </Link>
            ) : (
              <div className="text-center">
                {!showAdminLogin ? (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setShowAdminLogin(true)}
                    className="text-xs text-gray-500 hover:text-gray-700"
                  >
                    Admin Access
                  </Button>
                ) : (
                  <div className="space-y-4">
                    <AdminSignIn />
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setShowAdminLogin(false)}
                      className="text-xs"
                    >
                      Cancel
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
