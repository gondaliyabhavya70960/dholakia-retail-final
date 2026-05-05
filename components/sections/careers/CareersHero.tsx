'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ParallaxScene from '@/components/motion/ParallaxScene';

export default function CareersHero() {
  return (
    <section className="relative grid h-[100vh] grid-cols-1 overflow-hidden bg-ivory lg:grid-cols-[60%_40%]">
      <div className="relative h-[55vh] overflow-hidden lg:h-auto">
        <ParallaxScene
          className="absolute inset-0"
          amplitude={32}
          layers={[
            {
              depth: 1,
              children: (
                <div className="absolute -inset-[8%]">
                  <Image
                    src="/images/atelier-tools.jpg"
                    alt=""
                    fill
                    priority
                    sizes="60vw"
                    className="object-cover scale-110 grayscale"
                  />
                </div>
              )
            },
            {
              depth: 0.4,
              invert: true,
              children: <div className="absolute inset-0 bg-ink/15" />
            }
          ]}
        />
      </div>
      <div className="flex items-center border-l border-ink/10 px-7 py-14 md:px-14 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="max-w-[460px]"
        >
          <div className="text-[11px] uppercase tracking-[0.22em] text-electric">
            A note from the team
          </div>
          <p className="font-display mt-7 text-[clamp(1.8rem,2.6vw,2.6rem)] font-light italic leading-[1.25] tracking-[-0.005em] text-ink">
            “We do not hire to fill seats. We hire to write the next chapter — and we ask you to bring the pen.”
          </p>
          <div className="mt-8 text-[11px] uppercase tracking-[0.22em] text-muted">
            — Ananya Sheth · Director, Houses & Brand
          </div>
        </motion.div>
      </div>
    </section>
  );
}
