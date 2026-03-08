"use client";
import * as React from "react"
import { motion } from "framer-motion"

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
  width?: "fit-content" | "100%"
}

export function ScrollReveal({ children, delay = 0, className, width = "100%" }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      style={{ width }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
