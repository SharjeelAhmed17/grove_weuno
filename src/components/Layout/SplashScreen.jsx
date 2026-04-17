"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Logo } from "@/asstes"; // Adjust path to your logo

export default function SplashScreen({ finishLoading }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[100000] flex items-center justify-center bg-[#0F1500]"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image src={Logo} alt="Logo" width={250} priority={true} />
        </motion.div>

        <div className="mt-8 h-[2px] w-48 overflow-hidden bg-white/10">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            onAnimationComplete={finishLoading}
            className="h-full w-full bg-theme-primary"
          />
        </div>
      </div>
    </motion.div>
  );
}