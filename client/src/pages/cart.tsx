import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Plus, Minus, Trash2, ShoppingCart, ArrowLeft } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/utils";
import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CheckoutModal from "@/components/checkout-modal";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false);
  const [itemToRemove, setItemToRemove] = useState<number | null>(null);

  const total = getTotalPrice();
  const shippingCost = total > 50 ? 0 : 5.99; // Free shipping over €50
  const finalTotal = total + shippingCost;

  const handleRemoveItem = (index: number) => {
    setItemToRemove(index);
    setIsRemoveDialogOpen(true);
  };

  const confirmRemove = () => {
    if (itemToRemove !== null) {
      removeFromCart(itemToRemove);
      setItemToRemove(null);
    }
    setIsRemoveDialogOpen(false);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      return;
    }
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Shop
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <ShoppingCart className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          </div>
        </div>

        {/* Cart Content */}
        {cart.length === 0 ? (
          /* Empty Cart Message */
          <div className="text-center py-16">
            <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is currently empty</h2>
            <p className="text-gray-600 mb-8">Add some products to get started</p>
            <Link href="/">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Product List */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">Items in your cart</h2>
                
                <div className="space-y-6">
                  {cart.map((item, index) => (
                    <div key={`${item.id}-${item.size}`} className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-200 rounded-lg">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.name}</h3>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p><span className="font-medium">Size:</span> {item.dimensions || item.size}</p>
                          {item.operatingSide && (
                            <p><span className="font-medium">Operating Side:</span> {item.operatingSide}</p>
                          )}
                          {item.chainType && (
                            <p><span className="font-medium">Chain Type:</span> {item.chainType}</p>
                          )}
                          {item.color && (
                            <p><span className="font-medium">Color:</span> {item.color}</p>
                          )}
                          {item.fabricType && (
                            <p><span className="font-medium">Fabric Type:</span> {item.fabricType}</p>
                          )}
                          {item.installationType && (
                            <p><span className="font-medium">Installation:</span> {item.installationType}</p>
                          )}
                          <p><span className="font-medium">Unit Price:</span> {formatPrice(item.price)}</p>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-700">Qty:</span>
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => updateQuantity(index, -1)}
                              disabled={item.quantity <= 1}
                              className="h-10 w-10 rounded-none border-r border-gray-300"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-12 text-center font-medium">{item.quantity}</span>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => updateQuantity(index, 1)}
                              className="h-10 w-10 rounded-none border-l border-gray-300"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        {/* Item Total and Remove */}
                        <div className="flex items-center justify-between sm:flex-col sm:items-end gap-2">
                          <span className="font-bold text-lg text-gray-900">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleRemoveItem(index)}
                            className="text-red-600 hover:text-red-800 hover:bg-red-50 min-h-[44px] px-3"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Clear Cart Button */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Button 
                    variant="outline"
                    onClick={clearCart}
                    className="text-red-600 border-red-600 hover:bg-red-50"
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">{formatPrice(total)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping:</span>
                    <span className="font-medium">
                      {shippingCost === 0 ? (
                        <span className="text-green-600">Free</span>
                      ) : (
                        formatPrice(shippingCost)
                      )}
                    </span>
                  </div>
                  
                  {total < 50 && (
                    <p className="text-sm text-blue-600 bg-blue-50 p-2 rounded">
                      Add {formatPrice(50 - total)} more for free shipping!
                    </p>
                  )}
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Total:</span>
                      <span className="text-2xl font-bold text-primary">{formatPrice(finalTotal)}</span>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleCheckout}
                  className="w-full mt-6 bg-primary hover:bg-primary/90 text-white py-4 text-lg font-semibold min-h-[48px]"
                >
                  Proceed to Checkout
                </Button>

                <Link href="/">
                  <Button variant="outline" className="w-full mt-3 min-h-[48px]">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />

      {/* Remove Confirmation Dialog */}
      <Dialog open={isRemoveDialogOpen} onOpenChange={setIsRemoveDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Remove Item</DialogTitle>
            <DialogDescription>
              Are you sure you want to remove this item from your cart?
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-3 mt-6">
            <Button variant="outline" onClick={() => setIsRemoveDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmRemove}>
              Remove
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Checkout Modal */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
      />
    </div>
  );
}