"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface CartItem {
  color?: string; // Optional, allowing undefined
  size?: string;  // Optional, allowing undefined
  imgSrc: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeItem: (index: number) => void;
  updateQuantity: (index: number, quantity: number) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    // Load cart from local storage if available
    const savedCart = typeof window !== 'undefined' ? localStorage.getItem("cart") : null;
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    // Save cart to local storage whenever it changes
    if (typeof window !== 'undefined') {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItem = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const updateQuantity = (index: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item, i) => (i === index ? { ...item, quantity } : item))
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
