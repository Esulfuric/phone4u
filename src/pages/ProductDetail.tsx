
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ArrowLeft, ShoppingCart, Check, Shield, Truck, RefreshCw, ChevronDown } from "lucide-react";
import { getPhoneById, getRelatedPhones } from "@/data";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const { toast } = useToast();
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  
  // Early return if no ID
  if (!id) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Invalid Product ID</h1>
            <Button asChild>
              <Link to="/products">Back to Products</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  let phone;
  let relatedPhones = [];
  
  try {
    phone = getPhoneById(Number(id));
    if (phone) {
      relatedPhones = getRelatedPhones(phone) || [];
    }
  } catch (error) {
    console.error("Error getting phone data:", error);
    phone = null;
  }

  // Debugging
  useEffect(() => {
    console.log("Current phone:", phone);
    console.log("ID from params:", id);
  }, [phone, id]);

  // Early return if no phone found
  if (!phone) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-4">The product with ID {id} could not be found.</p>
            <Button asChild>
              <Link to="/products">Back to Products</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const getBestSpec = (phone: any) => {
    const specs = phone.specifications;
    if (!specs) return "Performance";

    // Check for high-end features and return the best one
    if (specs.camera?.main && specs.camera.main.includes("108")) return "Camera";
    if (specs.camera?.main && specs.camera.main.includes("200")) return "Camera";
    if (specs.display?.type && specs.display.type.includes("AMOLED")) return "Display";
    if (specs.display?.type && specs.display.type.includes("120Hz")) return "Gaming";
    if (specs.platform?.chipset && specs.platform.chipset.includes("Snapdragon 8")) return "Performance";
    if (specs.platform?.chipset && specs.platform.chipset.includes("Dimensity 9")) return "Performance";
    if (specs.battery?.type && specs.battery.type.includes("5000")) return "Battery Life";
    if (specs.battery?.type && specs.battery.type.includes("6000")) return "Battery Life";
    if (phone.ram && parseInt(phone.ram) >= 12) return "Multitasking";
    if (phone.storage && parseInt(phone.storage) >= 512) return "Storage";
    
    return "Value";
  };

  const getTopSpecs = (phone: any) => {
    const specs = [];
    const phoneSpecs = phone.specifications;
    
    if (!phoneSpecs) return [];

    // Add best specs based on priority
    if (phoneSpecs.camera?.main) {
      specs.push({ label: "Camera", value: phoneSpecs.camera.main });
    }
    if (phoneSpecs.display?.type) {
      specs.push({ label: "Display", value: phoneSpecs.display.type });
    }
    if (phoneSpecs.platform?.chipset) {
      specs.push({ label: "Chipset", value: phoneSpecs.platform.chipset });
    }
    if (phoneSpecs.battery?.type) {
      specs.push({ label: "Battery", value: phoneSpecs.battery.type });
    }
    if (phone.ram) {
      specs.push({ label: "RAM", value: phone.ram });
    }
    if (phone.storage) {
      specs.push({ label: "Storage", value: phone.storage });
    }

    return specs.slice(0, 2); // Return top 2 specs
  };

  const handleAddToCart = () => {
    if (!phone) return;
    
    try {
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
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast({
        title: "Error",
        description: "Failed to add item to cart.",
        variant: "destructive"
      });
    }
  };

  const renderSpecItem = (label: string, value: string | number) => (
    <div className="flex justify-between py-1" key={label}>
      <span className="font-medium">{label}:</span>
      <span className="text-gray-600">{value}</span>
    </div>
  );

  const renderSpecSection = (title: string, specs: Record<string, any>) => {
    const validSpecs = Object.entries(specs).filter(([_, value]) => value);
    if (validSpecs.length === 0) return null;

    return (
      <div key={title} className="mb-4">
        <h3 className="font-semibold text-lg mb-2 text-gray-800">{title}</h3>
        <div className="space-y-1 pl-4">
          {validSpecs.map(([key, value]) => {
            const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            return renderSpecItem(formattedKey, String(value));
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
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
              src={phone.image || "/placeholder.jpg"}
              alt={phone.name || "Product"}
              className="w-full h-96 object-contain rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">{phone.brand || "Unknown"}</Badge>
              <Badge variant={phone.condition === 'new' ? 'default' : 'outline'}>
                {phone.condition ? phone.condition.charAt(0).toUpperCase() + phone.condition.slice(1) : 'Unknown'}
              </Badge>
              {phone.inStock && (
                <Badge variant="outline" className="text-green-600 border-green-600">
                  <Check className="mr-1 h-3 w-3" />
                  In Stock
                </Badge>
              )}
            </div>

            <h1 className="text-3xl font-bold mb-2">{phone.name || "Unknown Product"}</h1>
            <div className="mb-4">
              <Badge variant="outline" className="text-primary border-primary">
                Best for {getBestSpec(phone)}
              </Badge>
            </div>

            <div className="text-4xl font-bold text-brand-gold mb-4">
              ₦{phone.price ? phone.price.toLocaleString() : "0"}
            </div>

            <p className="text-gray-700 mb-6">{phone.description || "No description available"}</p>

            {/* Top 2 Specs */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-800">Key Features</h3>
              <div className="grid grid-cols-1 gap-3">
                {getTopSpecs(phone).map((spec, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">{spec.label}</span>
                    <span className="text-gray-600 text-sm">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              onClick={handleAddToCart}
              className="w-full bg-black hover:bg-brand-gold text-white mb-6"
              disabled={!phone.inStock}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              {phone.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>

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
            <CardHeader className="pb-4">
              <Collapsible open={isSpecsOpen} onOpenChange={setIsSpecsOpen}>
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between p-0 h-auto text-left hover:bg-transparent"
                  >
                    <CardTitle className="text-xl">Technical Specifications</CardTitle>
                    <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isSpecsOpen ? 'rotate-180' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-4">
                  <CardContent className="px-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Basic specifications */}
                      {(phone.specifications.storage || phone.specifications.ram || phone.specifications.connectivity) && (
                        <div className="space-y-3">
                          <h3 className="font-semibold text-lg text-gray-900 border-b border-gray-200 pb-2">Basic Information</h3>
                          <div className="space-y-2">
                            {phone.specifications.storage && (
                              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                <span className="font-medium text-gray-700">Storage</span>
                                <span className="text-gray-900 font-semibold">{phone.specifications.storage}</span>
                              </div>
                            )}
                            {phone.specifications.ram && (
                              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                <span className="font-medium text-gray-700">RAM</span>
                                <span className="text-gray-900 font-semibold">{phone.specifications.ram}</span>
                              </div>
                            )}
                            {phone.specifications.connectivity && (
                              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                <span className="font-medium text-gray-700">Connectivity</span>
                                <span className="text-gray-900 font-semibold">{phone.specifications.connectivity}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Display specifications */}
                      {phone.specifications.display && (
                        <div className="space-y-3">
                          <h3 className="font-semibold text-lg text-gray-900 border-b border-gray-200 pb-2">Display</h3>
                          <div className="space-y-2">
                            {Object.entries(phone.specifications.display).filter(([_, value]) => value).map(([key, value]) => {
                              const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                              return (
                                <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100">
                                  <span className="font-medium text-gray-700">{formattedKey}</span>
                                  <span className="text-gray-900 font-semibold">{String(value)}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Platform specifications */}
                      {phone.specifications.platform && (
                        <div className="space-y-3">
                          <h3 className="font-semibold text-lg text-gray-900 border-b border-gray-200 pb-2">Platform</h3>
                          <div className="space-y-2">
                            {Object.entries(phone.specifications.platform).filter(([_, value]) => value).map(([key, value]) => {
                              const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                              return (
                                <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100">
                                  <span className="font-medium text-gray-700">{formattedKey}</span>
                                  <span className="text-gray-900 font-semibold text-right text-sm">{String(value)}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Camera specifications */}
                      {phone.specifications.camera && (
                        <div className="space-y-3">
                          <h3 className="font-semibold text-lg text-gray-900 border-b border-gray-200 pb-2">Camera</h3>
                          <div className="space-y-2">
                            {Object.entries(phone.specifications.camera).filter(([_, value]) => value).map(([key, value]) => {
                              const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                              return (
                                <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100">
                                  <span className="font-medium text-gray-700">{formattedKey}</span>
                                  <span className="text-gray-900 font-semibold">{String(value)}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Body specifications */}
                      {phone.specifications.body && (
                        <div className="space-y-3">
                          <h3 className="font-semibold text-lg text-gray-900 border-b border-gray-200 pb-2">Body</h3>
                          <div className="space-y-2">
                            {Object.entries(phone.specifications.body).filter(([_, value]) => value).map(([key, value]) => {
                              const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                              return (
                                <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100">
                                  <span className="font-medium text-gray-700">{formattedKey}</span>
                                  <span className="text-gray-900 font-semibold text-right text-sm">{String(value)}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Battery specifications */}
                      {phone.specifications.battery && (
                        <div className="space-y-3">
                          <h3 className="font-semibold text-lg text-gray-900 border-b border-gray-200 pb-2">Battery</h3>
                          <div className="space-y-2">
                            {Object.entries(phone.specifications.battery).filter(([_, value]) => value).map(([key, value]) => {
                              const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                              return (
                                <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100">
                                  <span className="font-medium text-gray-700">{formattedKey}</span>
                                  <span className="text-gray-900 font-semibold">{String(value)}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </CardHeader>
          </Card>
        )}

        {/* Related Products */}
        {relatedPhones && relatedPhones.length > 0 && (
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
