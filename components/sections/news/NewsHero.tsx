'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ParallaxScene from '@/components/motion/ParallaxScene';

export default function NewsHero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-ink">
      <ParallaxScene
        className="absolute inset-0"
        amplitude={32}
        layers={[
          {
            depth: 1,
            children: (
              <div className="absolute -inset-[8%]">
                <Image
                  src="/images/news-1.jpg"
                  alt=""
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover scale-110"
                />
              </div>
            )
          },
          {
            depth: 0.5,
            invert: true,
            children: (
              <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/20 to-ink/85" />
            )
          }
        ]}
      />
      <div className="relative z-10 mx-auto flex h-full max-w-[1480px] flex-col justify-between px-6 py-12 md:px-12 md:py-16 text-ivory">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-display text-[clamp(3rem,7vw,6rem)] font-light italic leading-none tracking-[-0.02em]">
            Newsroom
          </span>
          <div className="mt-4 h-px w-32 bg-electric" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[640px]"
        >
          <div className="text-[11px] uppercase tracking-[0.22em] text-electric">Featured</div>
          <h1 className="font-display mt-5 text-[clamp(1.8rem,3vw,3rem)] font-light leading-[1.15]">
            Mayavé opens private viewing salon at Surat Diamond Bourse — by appointment.
          </h1>
          <div className="mt-5 text-[12px] uppercase tracking-[0.22em] text-ivory/70">
            April 2026 · Mayavé · 5 min read
          </div>
        </motion.div>
      </div>
    </section>
  );
}
