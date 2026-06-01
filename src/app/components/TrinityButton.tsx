import { ButtonHTMLAttributes } from "react";
import { motion } from "motion/react";

interface TrinityButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function TrinityButton({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: TrinityButtonProps) {
  const sizeClasses = {
    sm: "h-9 px-5 text-sm",
    md: "h-12 px-8 text-base",
    lg: "h-14 px-10 text-base",
  };

  const variantStyles = {
    primary: {
      backgroundColor: "var(--gold)",
      color: "var(--navy)",
      border: "none",
    },
    secondary: {
      backgroundColor: "var(--navy)",
      color: "white",
      border: "none",
    },
    ghost: {
      backgroundColor: "transparent",
      color: "var(--gold)",
      border: "1px solid var(--gold)",
    },
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`rounded-md font-medium uppercase tracking-wide transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size]} ${className}`}
      style={{
        ...variantStyles[variant],
        fontFamily: "var(--font-body)",
        letterSpacing: "0.05em",
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
