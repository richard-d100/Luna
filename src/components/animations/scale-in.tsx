"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  amount?: "some" | "all" | number;
}

export function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  className,
  amount = "some",
}: ScaleInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Apple-like ease
      }}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  );
}
