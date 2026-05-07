'use client';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ReactNode, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

/**
 * Fallback timeout (ms) after which content is revealed regardless of
 * whether IntersectionObserver has fired. This guards against:
 *   - browser screenshot/print tools that don't trigger scroll events
 *   - search engine crawlers
 *   - users with JS-throttled environments
 *   - prefers-reduced-motion users
 */
const FALLBACK_REVEAL_MS = 800;

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
  const reduced = useReducedMotion();
  const [forceVisible, setForceVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setForceVisible(true), FALLBACK_REVEAL_MS);
    return () => clearTimeout(t);
  }, []);

  const visible = inView || forceVisible || reduced;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: reduced ? 0 : y }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: reduced ? 0 : 0.9, ease: [0.16, 1, 0.3, 1], delay: reduced ? 0 : delay }}
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
  const reduced = useReducedMotion();
  const [forceVisible, setForceVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setForceVisible(true), FALLBACK_REVEAL_MS);
    return () => clearTimeout(t);
  }, []);

  const visible = inView || forceVisible || reduced;

  return (
    <div ref={ref} className={clsx('flex flex-wrap', className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: reduced ? 0 : 28 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: reduced ? 0 : 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: reduced ? 0 : delay + i * 0.05
          }}
          className="mr-[0.28em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
