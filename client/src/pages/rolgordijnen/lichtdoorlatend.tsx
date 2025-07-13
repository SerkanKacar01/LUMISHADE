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

export default function RolgordijnenLichtdoorlatendPage() {
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
      name: "Klassieke Rolgordijn Wit",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "2",
      name: "Modern Rolgordijn Beige",
      price: 52.99,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "3",
      name: "Elegante Rolgordijn Grijs",
      price: 48.99,
      image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "4",
      name: "Minimale Rolgordijn Crème",
      price: 44.99,
      image: "https://images.unsplash.com/photo-1564540583246-934409427776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "5",
      name: "Luxe Rolgordijn Taupe",
      price: 58.99,
      image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "6",
      name: "Natural Rolgordijn Linnen",
      price: 55.99,
      image: "https://images.unsplash.com/photo-1606744837616-58cd3c8c7fb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "7",
      name: "Design Rolgordijn Zand",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "8",
      name: "Trendy Rolgordijn Sage",
      price: 53.99,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "9",
      name: "Premium Rolgordijn Pearl",
      price: 61.99,
      image: "https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "10",
      name: "Stijlvolle Rolgordijn Ivory",
      price: 47.99,
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
              Lichtdoorlatende Rolgordijnen
            </h1>
            <p className="text-lg text-gray-600">
              Ontdek onze collectie lichtdoorlatende rolgordijnen voor een zachte lichtval in uw woning.
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
                    {product.id === "1" ? (
                      <Link to="/rolgordijnen/lichtdoorlatend/klassieke-rolgordijn-wit">
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