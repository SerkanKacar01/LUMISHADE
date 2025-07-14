import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { Link } from "wouter";

interface HeaderProps {
  onCartClick?: () => void;
}

export default function Header({ onCartClick }: HeaderProps) {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">
              LUMISHADÉ
            </h1>
          </div>



          <div className="flex items-center space-x-2 sm:space-x-4">
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
