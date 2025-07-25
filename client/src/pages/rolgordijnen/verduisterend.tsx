import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductDetailModal from "@/components/product-detail-modal";
import CartModal from "@/components/cart-modal";
import CheckoutModal from "@/components/checkout-modal";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import StandardRollerDescription from "@/components/ui/standard-roller-description";

export default function RolgordijnenVerduisterendPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const products = [
    {
      id: "1",
      name: "Blackout Rolgordijn Zwart",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "2",
      name: "Verduisterende Rolgordijn Donkergrijs",
      price: 72.99,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "3",
      name: "Totaal Blackout Marineblauw",
      price: 74.99,
      image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "4",
      name: "Premium Blackout Antraciet",
      price: 78.99,
      image: "https://images.unsplash.com/photo-1548048026-5a1a941d93d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "5",
      name: "Luxe Verduisterend Bruin",
      price: 76.99,
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "6",
      name: "Complete Blackout Bordeaux",
      price: 75.99,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "7",
      name: "Moderne Blackout Groen",
      price: 71.99,
      image: "https://images.unsplash.com/photo-1592928715029-ad13da8c8ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "8",
      name: "Stijlvolle Blackout Paars",
      price: 73.99,
      image: "https://images.unsplash.com/photo-1631678444745-89e9c0366ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "9",
      name: "Professional Blackout Charcoal",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "10",
      name: "Designer Blackout Midnight",
      price: 82.99,
      image: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <>
      <Header onCartClick={handleCartClick} />
      
      <main className="min-h-screen bg-gray-50">
        {/* Page Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center gap-4 mb-4">
              <Link to="/products/rolgordijnen">
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Terug naar rolgordijnen
                </Button>
              </Link>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Verduisterende Rolgordijnen
            </h1>
            <p className="text-lg text-gray-600">
              Perfecte blackout rolgordijnen voor optimale verduistering en privacy.
            </p>
          </div>
        </div>

        {/* Standard Description */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StandardRollerDescription />
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-w-16 aspect-h-12">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-32 md:h-48 object-cover"
                    />
                  </div>
                  <div className="p-2 md:p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base leading-tight line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="text-base md:text-xl font-bold text-primary mb-2 md:mb-4">
                      €{product.price}
                    </div>
                    {product.id === "21" ? (
                      <Link to="/rolgordijnen/verduisterend/blackout-rolgordijn-zwart">
                        <Button className="w-full text-xs md:text-sm py-2 md:py-3 min-h-[36px] md:min-h-[44px]">
                          Bekijk product
                        </Button>
                      </Link>
                    ) : product.id === "22" ? (
                      <Link to="/rolgordijnen/verduisterend/premium-blackout-blauw">
                        <Button className="w-full text-xs md:text-sm py-2 md:py-3 min-h-[36px] md:min-h-[44px]">
                          Bekijk product
                        </Button>
                      </Link>
                    ) : product.id === "23" ? (
                      <Link to="/rolgordijnen/verduisterend/elegante-blackout-grijs">
                        <Button className="w-full text-xs md:text-sm py-2 md:py-3 min-h-[36px] md:min-h-[44px]">
                          Bekijk product
                        </Button>
                      </Link>
                    ) : product.id === "24" ? (
                      <Link to="/rolgordijnen/verduisterend/standaard-blackout-wit">
                        <Button className="w-full text-xs md:text-sm py-2 md:py-3 min-h-[36px] md:min-h-[44px]">
                          Bekijk product
                        </Button>
                      </Link>
                    ) : product.id === "25" ? (
                      <Link to="/rolgordijnen/verduisterend/complete-blackout-bordeaux">
                        <Button className="w-full text-xs md:text-sm py-2 md:py-3 min-h-[36px] md:min-h-[44px]">
                          Bekijk product
                        </Button>
                      </Link>
                    ) : product.id === "26" ? (
                      <Link to="/rolgordijnen/verduisterend/moderne-blackout-groen">
                        <Button className="w-full text-xs md:text-sm py-2 md:py-3 min-h-[36px] md:min-h-[44px]">
                          Bekijk product
                        </Button>
                      </Link>
                    ) : product.id === "27" ? (
                      <Link to="/rolgordijnen/verduisterend/stijlvolle-blackout-paars">
                        <Button className="w-full text-xs md:text-sm py-2 md:py-3 min-h-[36px] md:min-h-[44px]">
                          Bekijk product
                        </Button>
                      </Link>
                    ) : product.id === "28" ? (
                      <Link to="/rolgordijnen/verduisterend/professional-blackout-charcoal">
                        <Button className="w-full text-xs md:text-sm py-2 md:py-3 min-h-[36px] md:min-h-[44px]">
                          Bekijk product
                        </Button>
                      </Link>
                    ) : product.id === "29" ? (
                      <Link to="/rolgordijnen/verduisterend/designer-blackout-midnight">
                        <Button className="w-full text-xs md:text-sm py-2 md:py-3 min-h-[36px] md:min-h-[44px]">
                          Bekijk product
                        </Button>
                      </Link>
                    ) : (
                      <Button className="w-full text-xs md:text-sm py-2 md:py-3 min-h-[36px] md:min-h-[44px]">
                        Bekijk product
                      </Button>
                    )}
                  </div>
                </div>
              ))}
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