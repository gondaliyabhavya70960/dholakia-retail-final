'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  strength?: number; // pixels of movement at the edges
  invert?: boolean;
};

/**
 * Single-layer mouse parallax wrapper.
 * Translates child by -strength..+strength on each axis based on cursor offset
 * from the element center. Damped via spring for buttery 60fps motion.
 */
export default function MouseParallax({ children, className, strength = 14, invert = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 18, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 80, damping: 18, mass: 0.5 });
  const dir = invert ? -1 : 1;
  const x = useTransform(sx, (v) => v * strength * dir);
  const y = useTransform(sy, (v) => v * strength * dir);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(hover: none)').matches) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      // Use viewport-normalised distance for hero scenes — feels global, not local
      const nx = (e.clientX - cx) / (window.innerWidth / 2);
      const ny = (e.clientY - cy) / (window.innerHeight / 2);
      mx.set(Math.max(-1, Math.min(1, nx)));
      my.set(Math.max(-1, Math.min(1, ny)));
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  return (
    <div ref={ref} className={className} style={{ position: 'relative' }}>
      <motion.div style={{ x, y, willChange: 'transform' }}>{children}</motion.div>
    </div>
  );
}
