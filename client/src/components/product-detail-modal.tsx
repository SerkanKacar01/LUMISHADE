import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Minus } from 'lucide-react';
import { getProductById } from '@/data/products';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';
import { formatPrice } from '@/lib/utils';

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  productId: string | null;
}

export default function ProductDetailModal({ isOpen, onClose, productId }: ProductDetailModalProps) {
  const [selectedSize, setSelectedSize] = useState('100x150');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const product = productId ? getProductById(productId) : null;

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product.id, product.name, product.price, selectedSize, quantity, product.image);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
    onClose();
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[95vh] overflow-y-auto w-[95vw] sm:w-full mobile-modal mobile-container">
        <DialogHeader className="mb-3 sm:mb-6">
          <DialogTitle className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900 mobile-product-title">{product.name}</DialogTitle>
        </DialogHeader>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8">
          <div>
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full rounded-xl shadow-lg mobile-product-image max-h-[250px] object-cover"
            />
          </div>

          <div className="mobile-stack">
            <div className="mb-3 sm:mb-6">
              <span className="text-lg sm:text-3xl lg:text-4xl font-bold text-primary mobile-product-price">{formatPrice(product.price)}</span>
              <span className="text-gray-500 ml-2 text-xs sm:text-base">inc. VAT</span>
            </div>

            <p className="text-gray-600 mb-3 sm:mb-6 text-xs sm:text-base leading-relaxed mobile-product-description max-h-[60px] overflow-hidden">{product.description}</p>

            <div className="mb-3 sm:mb-6 mobile-form-field">
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2 mobile-form-label">Maat</label>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-full min-h-[48px] text-base mobile-form-input">
                  <SelectValue placeholder="Selecteer maat" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map(size => (
                    <SelectItem key={size} value={size}>
                      {size}cm
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="mb-4 sm:mb-8 mobile-form-field">
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2 mobile-form-label">Aantal</label>
              <div className="flex items-center justify-center space-x-3">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                  className="h-12 w-12 min-h-[44px] min-w-[44px]"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-lg sm:text-xl font-semibold min-w-[3rem] text-center">{quantity}</span>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={increaseQuantity}
                  className="h-12 w-12 min-h-[44px] min-w-[44px]"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button 
              onClick={handleAddToCart}
              className="w-full bg-primary hover:bg-primary/90 mobile-no-hover text-white py-3 sm:py-4 px-6 text-base sm:text-lg font-semibold mb-3 sm:mb-6 min-h-[48px] mobile-button"
            >
              Toevoegen aan winkelwagen
            </Button>

            <div className="bg-gray-50 rounded-lg p-2 sm:p-4">
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Product kenmerken:</h3>
              <ul className="text-xs sm:text-sm text-gray-600 space-y-1 max-h-[120px] overflow-y-auto">
                {product.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
