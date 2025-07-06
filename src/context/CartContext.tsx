"use client";
import { createContext, useContext, useState, useEffect } from "react";

export type CartMemory = {
  preferredLayout?: string;
  stressTriggers: string[];
  visualPrefs: {
    contrast: string;
    fontSize: string;
  };
  dietaryPrefs: string[];
};

const defaultCart: CartMemory = {
  preferredLayout: "grid",
  stressTriggers: [],
  visualPrefs: {
    contrast: "normal",
    fontSize: "medium",
  },
  dietaryPrefs: [],
};

const CartContext = createContext<{
  memory: CartMemory;
  updateMemory: (updates: Partial<CartMemory>) => void;
} | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [memory, setMemory] = useState<CartMemory>(defaultCart);

  useEffect(() => {
    const stored = localStorage.getItem("smartCartMemory");
    if (stored) {
      setMemory(JSON.parse(stored));
    }
  }, []);

  const updateMemory = (updates: Partial<CartMemory>) => {
    const updated = { ...memory, ...updates };
    setMemory(updated);
    localStorage.setItem("smartCartMemory", JSON.stringify(updated));
    
  };

  return (
    <CartContext.Provider value={{ memory, updateMemory }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartMemory() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCartMemory must be used inside CartProvider");
  return context;
}
