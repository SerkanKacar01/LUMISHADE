import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CartModal from "@/components/cart-modal";
import CheckoutModal from "@/components/checkout-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search } from "lucide-react";
import { Link } from "wouter";
import { getPriceByWidth, getAvailableWidths, formatSize } from "@/data/pricing";
import StandardRollerDescription from "@/components/ui/standard-roller-description";

export default function ComfortabeleRolgordijnCremePage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedWidth, setSelectedWidth] = useState(100);
  const [operatingSide, setOperatingSide] = useState("rechts");
  const [searchWidth, setSearchWidth] = useState("");

  const handleCartClick = () => setIsCartOpen(true);
  const handleCheckout = () => { setIsCartOpen(false); setIsCheckoutOpen(true); };
  const currentPrice = getPriceByWidth('lichtdoorlatend', selectedWidth);
  const totalPrice = currentPrice * quantity;

  const handleAddToCart = () => {
    console.log("Adding to cart:", {
      product: "Comfortabele Rolgordijn Creme",
      quantity, operatingSide, size: formatSize(selectedWidth),
      unitPrice: currentPrice, totalPrice: totalPrice,
    });
  };

  const widthOptions = getAvailableWidths();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const searchValue = parseInt(searchWidth);
    if (!isNaN(searchValue)) {
      const closestWidth = widthOptions.reduce((prev, curr) =>
        Math.abs(curr - searchValue) < Math.abs(prev - searchValue) ? curr : prev,
      );
      if (widthOptions.includes(closestWidth)) {
        setSelectedWidth(closestWidth);
        setSearchWidth("");
        setTimeout(() => {
          const selectedButton = document.querySelector(`[data-width="${closestWidth}"]`);
          if (selectedButton) {
            selectedButton.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
          }
        }, 100);
      }
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") { e.preventDefault(); handleSearchSubmit(e as any); }
  };

  return (
    <>
      <Header onCartClick={handleCartClick} />
      <main className="min-h-screen bg-gray-50">
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Comfortabele Rolgordijn Creme</h1>
              <div className="aspect-w-16 aspect-h-12 lg:aspect-w-4 lg:aspect-h-3">
                <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Comfortabele Rolgordijn Creme" className="w-full h-64 lg:h-80 object-cover rounded-lg" />
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">€{currentPrice.toFixed(2)}</div>
                {quantity > 1 && (
                  <div className="text-lg text-gray-600">{quantity} × €{currentPrice.toFixed(2)} = €{totalPrice.toFixed(2)}</div>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-lg font-semibold text-gray-900">Aantal</label>
              <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="w-full max-w-xs border border-gray-300 rounded-md px-4 py-3 text-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => <option key={num} value={num}>{num}</option>)}
              </select>
            </div>

            <div className="space-y-4">
              <label className="block text-lg font-semibold text-gray-900">Breedte (cm)</label>
              <form onSubmit={handleSearchSubmit} className="flex gap-2 mb-4">
                <div className="relative flex-1 max-w-xs">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input type="number" min="40" max="280" placeholder="Ga naar breedte (bijv. 150)" value={searchWidth} onChange={(e) => setSearchWidth(e.target.value)} onKeyDown={handleSearchKeyDown} className="pl-10 h-10" />
                </div>
                <Button type="submit" variant="outline" size="sm" className="h-10 px-4">Zoek</Button>
              </form>

              <div className="relative">
                <div className="width-selector-scroll flex gap-3 overflow-x-auto pb-4 scroll-smooth">
                  <div className="flex gap-3 min-w-max">
                    {widthOptions.map((width) => (
                      <button key={width} data-width={width} onClick={() => setSelectedWidth(width)} className={`width-button-consistent flex-shrink-0 min-w-[80px] md:min-w-[90px] px-3 md:px-4 py-2 text-sm md:text-base font-medium rounded-lg border transition-all duration-200 touch-target ${selectedWidth === width ? "selected bg-primary text-white border-primary shadow-lg" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md active:scale-95"}`}>
                        <div className="flex flex-col items-center">
                          <span>{width}cm</span>
                          <span className="text-xs opacity-75">€{getPriceByWidth('lichtdoorlatend', width).toFixed(2)}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="scroll-fade-left absolute left-0 top-0 bottom-4 w-12 pointer-events-none z-10"></div>
                <div className="scroll-fade-right absolute right-0 top-0 bottom-4 w-12 pointer-events-none z-10"></div>
                <div className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none z-20 opacity-60">⟨</div>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none z-20 opacity-60">⟩</div>
              </div>

              <div className="mt-3 mb-4 text-center md:hidden">
                <p className="text-sm text-gray-500">Veeg naar links of rechts om je gewenste breedte te selecteren.</p>
              </div>

              <div className="text-center">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-base font-medium bg-primary/10 text-primary border border-primary/20">Geselecteerd: {selectedWidth} cm</span>
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-lg font-semibold text-gray-900">Geselecteerde maat</label>
              <div className="text-lg text-gray-700 bg-gray-50 px-4 py-3 rounded-md border">{formatSize(selectedWidth)}</div>
            </div>

            <div className="space-y-3">
              <label className="block text-lg font-semibold text-gray-900">Hoogte</label>
              <div className="text-lg text-gray-700 bg-gray-50 px-4 py-3 rounded-md border">200 cm (standaard)</div>
            </div>

            <div className="space-y-3">
              <label className="block text-lg font-semibold text-gray-900">Bedieningszijde</label>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input id="links" name="operatingSide" type="radio" value="links" checked={operatingSide === "links"} onChange={(e) => setOperatingSide(e.target.value)} className="h-5 w-5 text-primary focus:ring-primary border-gray-300" />
                  <label htmlFor="links" className="ml-3 text-lg text-gray-700">Links</label>
                </div>
                <div className="flex items-center">
                  <input id="rechts" name="operatingSide" type="radio" value="rechts" checked={operatingSide === "rechts"} onChange={(e) => setOperatingSide(e.target.value)} className="h-5 w-5 text-primary focus:ring-primary border-gray-300" />
                  <label htmlFor="rechts" className="ml-3 text-lg text-gray-700">Rechts</label>
                </div>
              </div>
            </div>

            <StandardRollerDescription />

            <div className="pt-4">
              <Button onClick={handleAddToCart} size="lg" className="w-full text-lg py-4">In winkelmandje</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} onCheckout={handleCheckout} />
      <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
    </>
  );
}