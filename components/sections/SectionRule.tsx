'use client';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

export default function SectionRule({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  const [forceVisible, setForceVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setForceVisible(true), 800);
    return () => clearTimeout(t);
  }, []);
  const visible = inView || forceVisible;
  return (
    <div ref={ref} className={clsx('h-px w-full origin-left bg-ink/15', className)}>
      <motion.div
        className="h-full bg-electric"
        initial={{ scaleX: 0 }}
        animate={visible ? { scaleX: 1 } : {}}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'left' }}
      />
    </div>
  );
}
