import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { formatPrice } from '@/lib/utils';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export default function CartModal({ isOpen, onClose, onCheckout }: CartModalProps) {
  const { cart, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart();
  const total = getTotalPrice();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty');
      return;
    }
    onClose();
    onCheckout();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto w-[95vw] sm:w-full">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Shopping Cart</DialogTitle>
        </DialogHeader>

        <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Your cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div key={`${item.id}-${item.size}`} className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 bg-gray-50 rounded-lg p-3 sm:p-4">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-16 h-16 sm:w-16 sm:h-16 object-cover rounded-lg"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm sm:text-base">{item.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Size: {item.dimensions || item.size}</p>
                  {item.operatingSide && (
                    <p className="text-xs sm:text-sm text-gray-600">Side: {item.operatingSide}</p>
                  )}
                  {item.color && (
                    <p className="text-xs sm:text-sm text-gray-600">Color: {item.color}</p>
                  )}
                  <p className="text-xs sm:text-sm text-gray-600">{formatPrice(item.price)} each</p>
                </div>
                <div className="flex items-center justify-between w-full sm:w-auto sm:flex-col sm:items-end space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => updateQuantity(index, -1)}
                      disabled={item.quantity <= 1}
                      className="h-8 w-8 sm:h-10 sm:w-10"
                    >
                      <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                    <span className="w-6 sm:w-8 text-center text-sm sm:text-base">{item.quantity}</span>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => updateQuantity(index, 1)}
                      className="h-8 w-8 sm:h-10 sm:w-10"
                    >
                      <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center space-x-3">
                    <p className="font-semibold text-sm sm:text-base">{formatPrice(item.price * item.quantity)}</p>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => removeFromCart(index)}
                      className="text-red-500 hover:text-red-700 min-h-[44px] min-w-[44px]"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t pt-4 sm:pt-6">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <span className="text-lg sm:text-xl font-semibold">Total:</span>
            <span className="text-xl sm:text-2xl font-bold text-primary">{formatPrice(total)}</span>
          </div>

          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3 sm:gap-4">
            <Button 
              variant="outline"
              onClick={clearCart}
              disabled={cart.length === 0}
              className="w-full min-h-[48px] text-sm sm:text-base"
            >
              Clear Cart
            </Button>
            <Button 
              onClick={handleCheckout}
              className="bg-primary hover:bg-primary/90 text-white w-full min-h-[48px] text-sm sm:text-base"
            >
              Checkout
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
