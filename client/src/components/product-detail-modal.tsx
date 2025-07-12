import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Minus } from 'lucide-react';
import { getProductById } from '@/data/products';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';

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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-gray-900 mb-6">{product.name}</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          <div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-primary">£{product.price.toFixed(2)}</span>
              <span className="text-gray-500 ml-2">inc. VAT</span>
            </div>

            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select size" />
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

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
              <div className="flex items-center space-x-3">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-xl font-semibold min-w-[3rem] text-center">{quantity}</span>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={increaseQuantity}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button 
              onClick={handleAddToCart}
              className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-6 text-lg font-semibold mb-4"
            >
              Add to Cart
            </Button>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Product Features:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
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
