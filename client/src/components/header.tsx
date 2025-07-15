import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { Link } from "wouter";
import logoPath from "@assets/Een subtitel toevoegen_1752613526698.png";

interface HeaderProps {
  onCartClick?: () => void;
}

export default function Header({ onCartClick }: HeaderProps) {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-3 min-h-[100px] sm:min-h-[110px] relative">
          {/* Mobile layout: centered logo with absolute positioned cart */}
          <div className="flex items-center justify-center w-full md:hidden">
            <Link to="/" className="block">
              <img 
                src={logoPath} 
                alt="LUMISHADÉ logo" 
                className="h-auto w-auto min-w-[240px] max-w-[280px] object-contain"
                style={{ minHeight: '90px', maxHeight: '130px' }}
              />
            </Link>
          </div>
          
          {/* Tablet and Desktop layout: logo on left, cart on right */}
          <div className="hidden md:flex items-center justify-start flex-1">
            <Link to="/" className="block">
              <img 
                src={logoPath} 
                alt="LUMISHADÉ logo" 
                className="h-auto w-auto min-w-[260px] max-w-[320px] object-contain"
                style={{ minHeight: '90px', maxHeight: '140px' }}
              />
            </Link>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4 absolute right-0 md:relative">
            {onCartClick ? (
              <Button
                variant="ghost"
                size="icon"
                className="relative min-h-[48px] min-w-[48px]"
                onClick={onCartClick}
              >
                <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs font-semibold">
                    {totalItems}
                  </span>
                )}
              </Button>
            ) : (
              <Link to="/cart">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative min-h-[48px] min-w-[48px]"
                >
                  <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs font-semibold">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </Link>
            )}

          </div>
        </div>


      </div>
    </nav>
  );
}
