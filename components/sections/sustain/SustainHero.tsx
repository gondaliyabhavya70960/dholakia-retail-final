'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ParallaxScene from '@/components/motion/ParallaxScene';
import MagneticButton from '@/components/motion/MagneticButton';
import { ArrowRight } from 'lucide-react';

export default function SustainHero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-ocean text-ivory">
      <ParallaxScene
        className="absolute inset-0"
        amplitude={32}
        layers={[
          {
            depth: 1,
            children: (
              <div className="absolute -inset-[8%] opacity-50">
                <Image
                  src="/images/sustainability-1.jpg"
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            )
          },
          {
            depth: 0.5,
            invert: true,
            children: (
              <div className="absolute inset-0 bg-gradient-to-b from-ocean via-ocean/85 to-ocean" />
            )
          },
          {
            depth: 0.2,
            invert: true,
            children: <div className="grain absolute inset-0 pointer-events-none" />
          }
        ]}
      />
      <div className="relative z-10 mx-auto flex h-full max-w-[1480px] flex-col items-center justify-center px-6 text-center md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-[11px] uppercase tracking-[0.32em] text-electric">
            Sustainability · Annual Report 2026
          </div>
          <div className="font-display mt-10 text-[clamp(5rem,18vw,16rem)] font-light italic leading-[0.86] tracking-[-0.02em]">
            37<span className="text-electric">B</span>
          </div>
          <div className="mt-6 text-[12px] uppercase tracking-[0.22em] text-ivory/70">
            Litres of water saved · Lab-grown diamonds vs. mined · 2025
          </div>
          <h1 className="font-display mx-auto mt-12 max-w-[760px] text-[clamp(1.5rem,2.4vw,2.4rem)] font-light leading-[1.3] text-ivory/95">
            Sustainability is the only metric that does not get smaller over time.
          </h1>
          <div className="mt-12 flex justify-center">
            <MagneticButton href="#pillars">
              Read our commitments
              <ArrowRight size={14} />
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
