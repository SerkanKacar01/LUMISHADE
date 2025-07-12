import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';
import { Check } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { cart, clearCart, getTotalPrice } = useCart();
  const { toast } = useToast();
  const total = getTotalPrice();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate order processing
    setTimeout(() => {
      clearCart();
      setIsSubmitting(false);
      setShowConfirmation(true);
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your order. We'll send you a confirmation email shortly.",
      });
    }, 1000);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    onClose();
    setFormData({
      fullName: '',
      email: '',
      address: '',
      city: '',
      postalCode: '',
      phone: ''
    });
  };

  if (showConfirmation) {
    return (
      <Dialog open={isOpen} onOpenChange={handleCloseConfirmation}>
        <DialogContent className="max-w-md w-[95vw] sm:w-full mobile-modal mobile-container">
          <div className="text-center py-3 sm:py-6">
            <div className="w-10 h-10 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
              <Check className="text-green-600 w-5 h-5 sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 mobile-product-title">Bestelling bevestigd!</h2>
            <p className="text-gray-600 mb-3 sm:mb-6 text-xs sm:text-base mobile-product-description">Bedankt voor uw bestelling. We sturen u spoedig een bevestigingsmail.</p>
            <Button onClick={handleCloseConfirmation} className="bg-primary hover:bg-primary/90 mobile-no-hover text-white min-h-[48px] text-base mobile-button">
              Verder winkelen
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto w-[95vw] sm:w-full">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Checkout</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <Label htmlFor="fullName" className="text-sm sm:text-base">Full Name *</Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="mt-1 min-h-[48px] text-base"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-sm sm:text-base">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 min-h-[48px] text-base"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="address" className="text-sm sm:text-base">Address *</Label>
            <Input
              id="address"
              name="address"
              type="text"
              required
              value={formData.address}
              onChange={handleInputChange}
              className="mt-1 min-h-[48px] text-base"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <Label htmlFor="city" className="text-sm sm:text-base">City *</Label>
              <Input
                id="city"
                name="city"
                type="text"
                required
                value={formData.city}
                onChange={handleInputChange}
                className="mt-1 min-h-[48px] text-base"
              />
            </div>
            <div>
              <Label htmlFor="postalCode" className="text-sm sm:text-base">Postal Code *</Label>
              <Input
                id="postalCode"
                name="postalCode"
                type="text"
                required
                value={formData.postalCode}
                onChange={handleInputChange}
                className="mt-1 min-h-[48px] text-base"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm sm:text-base">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="mt-1 min-h-[48px] text-base"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
            <h3 className="font-semibold mb-2 text-sm sm:text-base">Order Summary</h3>
            <div className="text-xs sm:text-sm text-gray-600 space-y-1">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between py-1 text-xs sm:text-sm">
                  <span className="flex-1 pr-2">{item.name} ({item.size}cm) x {item.quantity}</span>
                  <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-semibold text-sm sm:text-base">
                  <span>Total:</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-white py-3 sm:py-4 px-6 text-base sm:text-lg font-semibold min-h-[48px]"
          >
            {isSubmitting ? 'Processing...' : 'Place Order'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
