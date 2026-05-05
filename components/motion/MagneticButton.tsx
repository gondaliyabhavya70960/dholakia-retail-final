'use client';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

type Props = {
  href?: string;
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'ghost' | 'navy';
  strength?: number;
  onClick?: () => void;
};

export default function MagneticButton({
  href,
  children,
  className,
  variant = 'primary',
  strength = 14,
  onClick
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 16 });
  const sy = useSpring(y, { stiffness: 200, damping: 16 });

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const nx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const ny = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    x.set(nx * strength);
    y.set(ny * strength);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const styles = {
    primary:
      'bg-electric text-white hover:bg-royal',
    ghost:
      'border border-electric text-electric hover:bg-electric hover:text-white',
    navy:
      'bg-ink text-white hover:bg-royal'
  }[variant];

  const Inner = (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      data-cursor="hover"
      onClick={onClick}
      className={clsx(
        'inline-flex items-center justify-center gap-2 px-7 py-4 text-[13px] uppercase tracking-[0.18em] font-medium transition-colors duration-300 rounded-none cursor-pointer',
        styles,
        className
      )}
    >
      {children}
    </motion.div>
  );

  if (href) return <Link href={href}>{Inner}</Link>;
  return Inner;
}
