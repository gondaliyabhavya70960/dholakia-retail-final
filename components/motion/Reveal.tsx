'use client';
import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import clsx from 'clsx';

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 24
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  );
}

export function RevealText({
  text,
  className,
  delay = 0
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(' ');
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  return (
    <div ref={ref} className={clsx('flex flex-wrap', className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: delay + i * 0.05 }}
          className="mr-[0.28em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
