import React from "react";
import { cn } from "@/lib/utils";

interface LogoTextProps {
  children: React.ReactNode;
  className?: string;
}

export const LogoText = ({ children, className }: LogoTextProps) => {
  return (
    <span className={cn("text-lg font-semibold tracking-tighter", className)}>
      {children}
    </span>
  );
};
