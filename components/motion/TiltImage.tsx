'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image, { ImageProps } from 'next/image';
import { useRef } from 'react';
import clsx from 'clsx';

type Props = Omit<ImageProps, 'src'> & {
  src: string;
  className?: string;
  containerClassName?: string;
  maxAngle?: number;
  scale?: number;
};

/**
 * 3D-tilt image that responds to cursor position over the element.
 * Combined with subtle scale gives a soft "look toward cursor" feel.
 */
export default function TiltImage({
  src,
  alt = '',
  className,
  containerClassName,
  maxAngle = 5,
  scale = 1.04,
  ...rest
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 18 });
  const sy = useSpring(my, { stiffness: 120, damping: 18 });
  const rotY = useTransform(sx, [-1, 1], [-maxAngle, maxAngle]);
  const rotX = useTransform(sy, [-1, 1], [maxAngle, -maxAngle]);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    mx.set(nx * 2);
    my.set(ny * 2);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={clsx('relative overflow-hidden', containerClassName)}
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={{ rotateX: rotX, rotateY: rotY, scale, transformStyle: 'preserve-3d' }}
        className="h-full w-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={clsx('object-cover', className)}
          {...rest}
        />
      </motion.div>
    </div>
  );
}
