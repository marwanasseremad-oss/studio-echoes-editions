import React, { createContext, useContext, useState, useCallback } from 'react';
import type { Product, ProductVariant } from '@/data/products';

export interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, variant: ProductVariant) => void;
  removeFromCart: (productId: string, size: string, framed: boolean) => void;
  updateQuantity: (productId: string, size: string, framed: boolean, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((product: Product, variant: ProductVariant) => {
    setItems(current => {
      const existingIndex = current.findIndex(
        item => 
          item.product.id === product.id && 
          item.variant.size === variant.size && 
          item.variant.framed === variant.framed
      );

      if (existingIndex > -1) {
        const updated = [...current];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        };
        return updated;
      }

      return [...current, { product, variant, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((productId: string, size: string, framed: boolean) => {
    setItems(current => 
      current.filter(
        item => 
          !(item.product.id === productId && item.variant.size === size && item.variant.framed === framed)
      )
    );
  }, []);

  const updateQuantity = useCallback((productId: string, size: string, framed: boolean, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId, size, framed);
      return;
    }

    setItems(current =>
      current.map(item =>
        item.product.id === productId && item.variant.size === size && item.variant.framed === framed
          ? { ...item, quantity }
          : item
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.variant.price * item.quantity), 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
