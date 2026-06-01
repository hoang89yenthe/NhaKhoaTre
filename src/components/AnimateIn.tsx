"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Anim = "slide-up" | "slide-left" | "slide-right" | "scale-up";

const animClass: Record<Anim, string> = {
  "slide-up":    "anim-slide-up",
  "slide-left":  "anim-slide-left",
  "slide-right": "anim-slide-right",
  "scale-up":    "anim-scale-up",
};

export default function AnimateIn({
  children,
  className,
  animation = "slide-up",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  animation?: Anim;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(className, visible ? animClass[animation] : "opacity-0")}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
