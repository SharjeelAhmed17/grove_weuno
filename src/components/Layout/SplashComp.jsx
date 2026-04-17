"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "./SplashScreen";

export default function SplashComp({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  return (
        <AnimatePresence mode="wait">
          {isLoading ? (
            <SplashScreen key="splash" finishLoading={() => setIsLoading(false)} />
          ) : (
            <main key="main-content">
              {children}
            </main>
          )}
        </AnimatePresence>

  );
}