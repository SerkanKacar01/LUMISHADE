import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductDetailModal from "@/components/product-detail-modal";
import CartModal from "@/components/cart-modal";
import CheckoutModal from "@/components/checkout-modal";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function DuoRolgordijnenLichtdoorlatendPage() {
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
      name: "Premium Duo Rolgordijn Wit",
      price: 109.99,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "2",
      name: "Luxe Duo Rolgordijn Beige",
      price: 115.99,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "3",
      name: "Designer Duo Rolgordijn Grijs",
      price: 112.99,
      image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "4",
      name: "Elegante Duo Rolgordijn Crème",
      price: 108.99,
      image: "https://images.unsplash.com/photo-1564540583246-934409427776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "5",
      name: "Modern Duo Rolgordijn Taupe",
      price: 118.99,
      image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "6",
      name: "Natural Duo Rolgordijn Linnen",
      price: 119.99,
      image: "https://images.unsplash.com/photo-1606744837616-58cd3c8c7fb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "7",
      name: "Stijlvolle Duo Rolgordijn Zand",
      price: 113.99,
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "8",
      name: "Trendy Duo Rolgordijn Sage",
      price: 116.99,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "9",
      name: "Executive Duo Rolgordijn Pearl",
      price: 125.99,
      image: "https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "10",
      name: "Luxury Duo Rolgordijn Ivory",
      price: 121.99,
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
              <Link to="/products/duo-rolgordijnen">
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Terug naar duo-rolgordijnen
                </Button>
              </Link>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Lichtdoorlatende Duo-rolgordijnen
            </h1>
            <p className="text-lg text-gray-600">
              Luxueuze duo-rolgordijnen met premium afwerking voor flexibele lichtsturing.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-w-16 aspect-h-12">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <div className="text-xl font-bold text-primary mb-4">
                      €{product.price}
                    </div>
                    <Button className="w-full">
                      Bekijk product
                    </Button>
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