'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';

type Layer = {
  depth: number; // -1 (front) … 1 (back)
  invert?: boolean;
  className?: string;
  children: ReactNode;
};

type Props = {
  className?: string;
  layers: Layer[];
  /** Base movement in px multiplied by depth. */
  amplitude?: number;
};

/**
 * Multi-layer mouse parallax for hero scenes.
 * Each layer translates with a depth-multiplied amount and counter-direction
 * for foreground vs. background, creating spatial depth illusion.
 */
export default function ParallaxScene({ className, layers, amplitude = 28 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 16, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 16, mass: 0.6 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(hover: none)').matches) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const nx = (e.clientX - cx) / (window.innerWidth / 2);
      const ny = (e.clientY - cy) / (window.innerHeight / 2);
      mx.set(Math.max(-1, Math.min(1, nx)));
      my.set(Math.max(-1, Math.min(1, ny)));
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  return (
    <div ref={ref} className={className} style={{ position: 'relative', overflow: 'hidden' }}>
      {layers.map((layer, i) => (
        <ParallaxLayer key={i} sx={sx} sy={sy} layer={layer} amplitude={amplitude} />
      ))}
    </div>
  );
}

function ParallaxLayer({
  sx,
  sy,
  layer,
  amplitude
}: {
  sx: any;
  sy: any;
  layer: Layer;
  amplitude: number;
}) {
  const dir = layer.invert ? -1 : 1;
  const x = useTransform(sx, (v: number) => v * amplitude * layer.depth * dir);
  const y = useTransform(sy, (v: number) => v * amplitude * layer.depth * dir);
  return (
    <motion.div
      className={layer.className}
      style={{ x, y, willChange: 'transform', position: 'absolute', inset: 0 }}
    >
      {layer.children}
    </motion.div>
  );
}
