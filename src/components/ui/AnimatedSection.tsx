"use client";

import { useAnimation, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
  threshold?: number;
}

export function AnimatedSection({
  children,
  delay = 0,
  direction = "up",
  className,
  once = true,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // For simplicity, animate immediately on mount
    // This creates a staggered effect parenthetically
    controls.start("visible");
  }, [controls]);

  return (
    <div
      ref={ref}
      className={cn("w-full", className)}
    >
      {children}
    </div>
  );
}