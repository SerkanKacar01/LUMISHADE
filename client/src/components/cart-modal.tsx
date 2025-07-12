import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';

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
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-gray-900 mb-6">Shopping Cart</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mb-6">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Your cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div key={`${item.id}-${item.size}`} className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-600">Size: {item.size}cm</p>
                  <p className="text-sm text-gray-600">£{item.price.toFixed(2)} each</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => updateQuantity(index, -1)}
                    disabled={item.quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => updateQuantity(index, 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-right">
                  <p className="font-semibold">£{(item.price * item.quantity).toFixed(2)}</p>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => removeFromCart(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t pt-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-semibold">Total:</span>
            <span className="text-2xl font-bold text-primary">£{total.toFixed(2)}</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button 
              variant="outline"
              onClick={clearCart}
              disabled={cart.length === 0}
            >
              Clear Cart
            </Button>
            <Button 
              onClick={handleCheckout}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Checkout
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
