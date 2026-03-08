"use client";
import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "glass" | "glow" | "link" | "secondary"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    
    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
      secondary: "bg-white text-foreground border border-slate-200 hover:bg-slate-50 shadow-sm",
      glow: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-all",
      outline: "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
      glass: "bg-white/90 backdrop-blur-md border border-slate-200 text-foreground hover:bg-slate-50 shadow-sm",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    }
    
    const sizes = {
      default: "h-12 px-6 py-2",
      sm: "h-10 rounded-lg px-4",
      lg: "h-14 rounded-2xl px-8 text-base font-semibold",
      icon: "h-12 w-12",
    }

    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props as any}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
