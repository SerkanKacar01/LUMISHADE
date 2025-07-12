import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductDetailModal from "@/components/product-detail-modal";
import CartModal from "@/components/cart-modal";
import CheckoutModal from "@/components/checkout-modal";
import { getProductsByCategoryAndFabricType } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function DuoRolgordijnenPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const lichtdoorlatendeDuoProducts = getProductsByCategoryAndFabricType('duo-rolgordijnen', 'lichtdoorlatend');
  const verduisterendeDuoProducts = getProductsByCategoryAndFabricType('duo-rolgordijnen', 'verduisterend');

  const handleProductClick = (productId: string) => {
    setSelectedProductId(productId);
    setIsProductDetailOpen(true);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <>
      <Header onCartClick={handleCartClick} />
      
      <main className="min-h-screen bg-gray-50">
        {/* Page Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center gap-4 mb-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Terug naar home
                </Button>
              </Link>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Duo-rolgordijnen
            </h1>

          </div>
        </div>

        {/* Product Sections */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Light-filtering Duo Roller Blinds Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                Lichtdoorlatende Duo-rolgordijnen
              </h2>
              
              <Link to="/duo-rolgordijnen/lichtdoorlatend">
                <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="aspect-w-16 aspect-h-12">
                      <img
                        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                        alt="Premium Duo Rolgordijn"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Premium Duo Rolgordijn
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Luxurious duo roller blind with premium finish
                        </p>
                        <div className="text-2xl font-bold text-primary mb-4">
                          €109.99
                        </div>
                      </div>
                      
                      <div>
                        <Button className="w-full">
                          Bekijk alle producten
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Blackout Duo Roller Blinds Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                Verduisterende Duo-rolgordijnen
              </h2>
              
              <Link to="/duo-rolgordijnen/verduisterend">
                <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="aspect-w-16 aspect-h-12">
                      <img
                        src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                        alt="Dag & Nacht Duo Rolgordijn"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Dag & Nacht Duo Rolgordijn
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Day and night functionality in one blind
                        </p>
                        <div className="text-2xl font-bold text-primary mb-4">
                          €94.99
                        </div>
                      </div>
                      
                      <div>
                        <Button className="w-full">
                          Bekijk alle producten
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* Modals */}
      <ProductDetailModal
        isOpen={isProductDetailOpen}
        onClose={() => setIsProductDetailOpen(false)}
        productId={selectedProductId}
      />

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </>
  );
}