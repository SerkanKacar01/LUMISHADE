import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CartModal from "@/components/cart-modal";
import CheckoutModal from "@/components/checkout-modal";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function KlassiekeRolgordijnWitPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [operatingSide, setOperatingSide] = useState("rechts");

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleAddToCart = () => {
    console.log("Adding to cart:", {
      product: "Klassieke Rolgordijn Wit",
      quantity,
      operatingSide,
      size: "100 cm x 175 cm",
      price: 45.99
    });
  };

  return (
    <>
      <Header onCartClick={handleCartClick} />
      
      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb Navigation */}
        <div className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-4">
              <Link to="/rolgordijnen/lichtdoorlatend">
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Terug naar lichtdoorlatende rolgordijnen
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Product Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-8">
            
            {/* Header Section */}
            <div className="space-y-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Klassieke Rolgordijn Wit
              </h1>
              
              <div className="aspect-w-16 aspect-h-12 lg:aspect-w-4 lg:aspect-h-3">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Klassieke Rolgordijn Wit"
                  className="w-full h-64 lg:h-80 object-cover rounded-lg"
                />
              </div>
              
              <div className="text-3xl font-bold text-primary">
                €45.99
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-gray-900">
                Aantal
              </label>
              <select 
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full max-w-xs border border-gray-300 rounded-md px-4 py-3 text-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>

            {/* Standard Size Display */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-gray-900">
                Standaard maat
              </label>
              <div className="text-lg text-gray-700 bg-gray-50 px-4 py-3 rounded-md border">
                100 cm x 175 cm
              </div>
            </div>

            {/* Operating Side */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-gray-900">
                Bedieningszijde
              </label>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    id="links"
                    name="operatingSide"
                    type="radio"
                    value="links"
                    checked={operatingSide === "links"}
                    onChange={(e) => setOperatingSide(e.target.value)}
                    className="h-5 w-5 text-primary focus:ring-primary border-gray-300"
                  />
                  <label htmlFor="links" className="ml-3 text-lg text-gray-700">
                    Links
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="rechts"
                    name="operatingSide"
                    type="radio"
                    value="rechts"
                    checked={operatingSide === "rechts"}
                    onChange={(e) => setOperatingSide(e.target.value)}
                    className="h-5 w-5 text-primary focus:ring-primary border-gray-300"
                  />
                  <label htmlFor="rechts" className="ml-3 text-lg text-gray-700">
                    Rechts
                  </label>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 font-medium">
                Lichtdoorlatend – ideaal voor privacy én daglicht. Inclusief montagemateriaal.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                onClick={handleAddToCart}
                size="lg"
                className="w-full text-lg py-4"
              >
                In winkelmandje
              </Button>
            </div>

          </div>
        </div>
      </main>

      <Footer />

      {/* Modals */}
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