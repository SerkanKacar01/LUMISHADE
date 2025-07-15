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
        <div className="flex items-center py-5 min-h-[64px] sm:min-h-[72px] relative">
          {/* Mobile layout: centered logo with absolute positioned cart */}
          <div className="flex items-center justify-center w-full sm:hidden">
            <Link to="/" className="block">
              <img 
                src={logoPath} 
                alt="LUMISHADÉ logo" 
                className="h-auto w-auto max-w-[180px] object-contain"
                style={{ maxHeight: '60px' }}
              />
            </Link>
          </div>
          
          {/* Desktop layout: logo on left, cart on right */}
          <div className="hidden sm:flex items-center justify-start flex-1">
            <Link to="/" className="block">
              <img 
                src={logoPath} 
                alt="LUMISHADÉ logo" 
                className="h-auto w-auto max-w-[220px] object-contain"
                style={{ maxHeight: '60px' }}
              />
            </Link>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4 absolute right-0 sm:relative">
            {onCartClick ? (
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
            ) : (
              <Link to="/cart">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative min-h-[44px] min-w-[44px]"
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
