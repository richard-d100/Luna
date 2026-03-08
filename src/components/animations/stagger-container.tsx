"use client";
import * as React from "react"
import { motion, Variants } from "framer-motion"

export function StaggerContainer({ children, className, delayChildren = 0.1, staggerChildren = 0.1 }: { children: React.ReactNode, className?: string, delayChildren?: number, staggerChildren?: number }) {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren
      }
    }
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: React.ReactNode, className?: string }) {
  const item: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  }

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  )
}
