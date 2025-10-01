"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

type RevealProps = {
  children: ReactNode;
  /** Delay in ms after becoming visible */
  delay?: number;
  /** Additional classNames to append */
  className?: string;
  /** Once only animation (true) or toggle on hide/show (false) */
  once?: boolean;
  /** Starting transform override. If provided, takes precedence over direction/distance */
  fromTransform?: string;
  /** Direction to slide from */
  direction?: Direction;
  /** Pixel distance to slide from (default 16) */
  distance?: number;
};

export default function Reveal({
  children,
  delay = 0,
  className,
  once = true,
  fromTransform,
  direction = "up",
  distance = 16,
}: RevealProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, once]);

  const computedFromTransform = (() => {
    if (fromTransform) return fromTransform;
    switch (direction) {
      case "down":
        return `translateY(-${distance}px)`;
      case "left":
        return `translateX(${distance}px)`;
      case "right":
        return `translateX(-${distance}px)`;
      case "up":
      default:
        return `translateY(${distance}px)`;
    }
  })();

  return (
    <div
      ref={rootRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : computedFromTransform,
        transition: "opacity 600ms ease, transform 600ms ease",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}


