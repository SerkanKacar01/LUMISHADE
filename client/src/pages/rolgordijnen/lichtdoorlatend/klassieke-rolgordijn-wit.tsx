import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CartModal from "@/components/cart-modal";
import CheckoutModal from "@/components/checkout-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search } from "lucide-react";
import { Link } from "wouter";

export default function KlassiekeRolgordijnWitPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedWidth, setSelectedWidth] = useState(100);
  const [operatingSide, setOperatingSide] = useState("rechts");
  const [searchWidth, setSearchWidth] = useState("");

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
      size: `${selectedWidth} cm x 210 cm`,
      price: 45.99
    });
  };

  // Generate width options from 40 to 280 cm in 5 cm increments
  const widthOptions = Array.from({ length: ((280 - 40) / 5 + 1) }, (_, i) => 40 + i * 5);

  // Handle search functionality
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const searchValue = parseInt(searchWidth);
    if (searchValue >= 40 && searchValue <= 280) {
      // Round to nearest 5cm increment
      const roundedWidth = Math.round(searchValue / 5) * 5;
      if (widthOptions.includes(roundedWidth)) {
        setSelectedWidth(roundedWidth);
        setSearchWidth("");
      }
    }
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

            {/* Width Selector */}
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-gray-900">
                Width (cm)
              </label>
              
              {/* Quick Search */}
              <form onSubmit={handleSearchSubmit} className="flex gap-2 mb-4">
                <div className="relative flex-1 max-w-xs">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="number"
                    min="40"
                    max="280"
                    step="5"
                    placeholder="Jump to width (e.g. 150)"
                    value={searchWidth}
                    onChange={(e) => setSearchWidth(e.target.value)}
                    className="pl-10 h-10"
                  />
                </div>
                <Button type="submit" variant="outline" size="sm" className="h-10 px-4">
                  Go
                </Button>
              </form>

              {/* Single Row Horizontal Scrollable Width Options */}
              <div className="relative">
                <div className="width-selector-scroll flex gap-3 overflow-x-auto pb-4 scroll-smooth">
                  <div className="flex gap-3 min-w-max">
                    {widthOptions.map(width => (
                      <button
                        key={width}
                        onClick={() => setSelectedWidth(width)}
                        className={`flex-shrink-0 min-w-[60px] md:min-w-[70px] h-[48px] px-3 md:px-4 py-2 text-sm md:text-base font-medium rounded-lg border transition-all duration-200 touch-target ${
                          selectedWidth === width
                            ? 'bg-primary text-white border-primary shadow-lg scale-105'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md active:scale-95'
                        }`}
                      >
                        {width}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Scroll indicators */}
                <div className="absolute left-0 top-0 bottom-4 w-4 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-4 w-4 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
              </div>
              
              {/* Selected Width Indicator */}
              <div className="text-center">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-base font-medium bg-primary/10 text-primary border border-primary/20">
                  Selected: {selectedWidth} cm
                </span>
              </div>
            </div>

            {/* Selected Size Display */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-gray-900">
                Selected size
              </label>
              <div className="text-lg text-gray-700 bg-gray-50 px-4 py-3 rounded-md border">
                {selectedWidth} cm x 210 cm
              </div>
            </div>

            {/* Height Display */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-gray-900">
                Height
              </label>
              <div className="text-lg text-gray-700 bg-gray-50 px-4 py-3 rounded-md border">
                210 cm (standard)
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