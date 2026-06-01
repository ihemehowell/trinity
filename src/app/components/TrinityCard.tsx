import { motion } from "motion/react";
import { ReactNode } from "react";

interface TrinityCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function TrinityCard({ children, className = "", hover = true }: TrinityCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : {}}
      className={`bg-white rounded-lg border border-[var(--divider)] overflow-hidden transition-all duration-200 ${
        hover ? "hover:shadow-lg" : ""
      } ${className}`}
      style={{
        borderTop: hover ? "1px solid var(--divider)" : undefined,
      }}
      onMouseEnter={(e) => {
        if (hover) {
          e.currentTarget.style.borderTopColor = "var(--gold)";
          e.currentTarget.style.borderTopWidth = "3px";
        }
      }}
      onMouseLeave={(e) => {
        if (hover) {
          e.currentTarget.style.borderTopColor = "var(--divider)";
          e.currentTarget.style.borderTopWidth = "1px";
        }
      }}
    >
      {children}
    </motion.div>
  );
}
