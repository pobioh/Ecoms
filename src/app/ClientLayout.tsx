"use client"; // Ensure this is a client component

import { ReactNode, useState, useEffect } from "react";
import { CartProvider } from "./components/CartContext"; // Import the preloader component
import "./globals.css";
import PagePreloader from "./components/Pagepreloader";

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PagePreloader />;
  }

  return <CartProvider>{children}</CartProvider>;
}
