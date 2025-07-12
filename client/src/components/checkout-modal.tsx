import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';
import { Check } from 'lucide-react';

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
        <DialogContent className="max-w-md">
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="text-green-600 w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
            <p className="text-gray-600 mb-6">Thank you for your order. We'll send you a confirmation email shortly.</p>
            <Button onClick={handleCloseConfirmation} className="bg-primary hover:bg-primary/90 text-white">
              Continue Shopping
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-gray-900 mb-6">Checkout</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="address">Address *</Label>
            <Input
              id="address"
              name="address"
              type="text"
              required
              value={formData.address}
              onChange={handleInputChange}
              className="mt-1"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="city">City *</Label>
              <Input
                id="city"
                name="city"
                type="text"
                required
                value={formData.city}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="postalCode">Postal Code *</Label>
              <Input
                id="postalCode"
                name="postalCode"
                type="text"
                required
                value={formData.postalCode}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="mt-1"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Order Summary</h3>
            <div className="text-sm text-gray-600 space-y-1">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between py-1">
                  <span>{item.name} ({item.size}cm) x {item.quantity}</span>
                  <span>£{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total:</span>
                  <span>£{total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-6 text-lg font-semibold"
          >
            {isSubmitting ? 'Processing...' : 'Place Order'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
