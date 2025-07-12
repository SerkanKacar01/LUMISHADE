import { useState, useEffect } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  quantity: number;
  image: string;
}

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const addToCart = (productId: string, name: string, price: number, size: string, quantity: number, image: string) => {
    const existingItem = cart.find(item => item.id === productId && item.size === size);
    
    if (existingItem) {
      const updatedCart = cart.map(item => 
        item.id === productId && item.size === size 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      saveCart(updatedCart);
    } else {
      const newItem: CartItem = {
        id: productId,
        name,
        price,
        size,
        quantity,
        image
      };
      saveCart([...cart, newItem]);
    }
  };

  const updateQuantity = (index: number, change: number) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += change;
    
    if (updatedCart[index].quantity <= 0) {
      updatedCart.splice(index, 1);
    }
    
    saveCart(updatedCart);
  };

  const removeFromCart = (index: number) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    saveCart(updatedCart);
  };

  const clearCart = () => {
    saveCart([]);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getTotalItems,
    getTotalPrice
  };
};
