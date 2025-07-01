
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { itemCount } = useCart();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/d8952835-0483-4d9b-ba3e-6d83bac0fdc2.png" 
              alt="Phone4u Logo" 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold">
              <span className="text-black">Phone</span>
              <span className="text-brand-gold">4u</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-gold transition-colors font-medium">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-brand-gold transition-colors font-medium">
              Products
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-brand-gold transition-colors font-medium">
              Contact
            </Link>
            <Link to="/cart">
              <Button variant="outline" className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Cart ({itemCount})
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleNav}
              className="p-2 text-gray-700 rounded-md outline-none"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-60 mt-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col space-y-4 pt-2 pb-3">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-brand-gold transition-colors font-medium px-2 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="text-gray-700 hover:text-brand-gold transition-colors font-medium px-2 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-brand-gold transition-colors font-medium px-2 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link to="/cart" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white justify-start">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Cart ({itemCount})
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
