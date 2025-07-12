import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { Link } from "wouter";

interface HeaderProps {
  onCartClick?: () => void;
}

export default function Header({ onCartClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto mobile-tight px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-16">
          <div className="flex items-center">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">
              LUMISHADÉ
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </button>
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <button
                className="text-gray-700 hover:text-primary transition-colors flex items-center gap-1"
                onClick={() => scrollToSection("products")}
              >
                Producten
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {isProductsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="py-1">
                    <Link
                      to="/products/rolgordijnen"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                    >
                      Rolgordijnen
                    </Link>
                    <Link
                      to="/products/duo-rolgordijnen"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                    >
                      Duo-rolgordijnen
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Over ons
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative min-h-[44px] min-w-[44px]"
              onClick={onCartClick}
            >
              <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs font-semibold">
                  {totalItems}
                </span>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden min-h-[44px] min-w-[44px]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-2 border-t bg-white mobile-container">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-primary transition-colors text-left text-base font-medium py-3 px-2 min-h-[44px] flex items-center rounded-lg"
              >
                Home
              </button>
              
              {/* Mobile Products Accordion */}
              <div>
                <button
                  onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                  className="text-gray-700 hover:text-primary transition-colors text-left text-base font-medium py-3 px-2 min-h-[44px] flex items-center justify-between w-full rounded-lg"
                >
                  Producten
                  <ChevronDown className={`h-4 w-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isProductsDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    <Link
                      to="/products/rolgordijnen"
                      className="block text-gray-600 hover:text-primary transition-colors text-base py-3 px-2 min-h-[40px] flex items-center rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Rolgordijnen
                    </Link>
                    <Link
                      to="/products/duo-rolgordijnen"
                      className="block text-gray-600 hover:text-primary transition-colors text-base py-3 px-2 min-h-[40px] flex items-center rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Duo-rolgordijnen
                    </Link>
                  </div>
                )}
              </div>
              
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-primary transition-colors text-left text-base font-medium py-3 px-2 min-h-[44px] flex items-center rounded-lg"
              >
                Over ons
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-primary transition-colors text-left text-base font-medium py-3 px-2 min-h-[44px] flex items-center rounded-lg"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
