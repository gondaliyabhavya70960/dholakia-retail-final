'use client';
import { motion } from 'framer-motion';

export default function ContactHero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[60%_40%]">
      <div className="bg-ivory px-6 py-28 md:px-12 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-[640px]"
        >
          <div className="text-[11px] uppercase tracking-[0.22em] text-electric">Contact</div>
          <h1 className="font-display mt-7 text-[clamp(2.6rem,5vw,5rem)] font-light italic leading-[1.02] tracking-[-0.015em] text-ink">
            Begin a conversation.
          </h1>
          <p className="mt-7 text-[16px] leading-[1.8] text-muted">
            Partnership · Investor relations · Press & media · Careers · Brand enquiries · Bespoke
            commissions. Each desk replies within two business days.
          </p>
        </motion.div>
      </div>
      <div className="relative hidden bg-ink lg:block">
        <motion.svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <motion.line
            x1="0"
            y1="100"
            x2="100"
            y2="0"
            stroke="#3B6FFF"
            strokeWidth="0.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          />
        </motion.svg>
      </div>
    </section>
  );
}
