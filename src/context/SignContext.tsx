"use client";
import { createContext, useContext, useState } from "react";

export type SignContextType = "general"| "greeting" | "checkout" | "error" | "thankYou";

const SignContext = createContext<{
  signContext: SignContextType;
  setSignContext: (context: SignContextType) => void;
} | null>(null);

export function SignContextProvider({ children }: { children: React.ReactNode }) {
  const [signContext, setSignContext] = useState<SignContextType>("greeting");

  return (
    <SignContext.Provider value={{ signContext, setSignContext }}>
      {children}
    </SignContext.Provider>
  );
}

export function useSignContext() {
  const context = useContext(SignContext);
  if (!context) throw new Error("useSignContext must be used inside SignContextProvider");
  return context;
}
