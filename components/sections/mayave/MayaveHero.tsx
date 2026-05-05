'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ParallaxScene from '@/components/motion/ParallaxScene';
import Link from 'next/link';

export default function MayaveHero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-black">
      <ParallaxScene
        className="absolute inset-0"
        amplitude={50}
        layers={[
          {
            depth: 1,
            children: (
              <div className="absolute -inset-[8%]">
                <Image
                  src="/images/mayave-piece.jpg"
                  alt="Mayavé"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover scale-110 brightness-90"
                />
              </div>
            )
          },
          {
            depth: 0.5,
            invert: true,
            children: (
              <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/20 to-black/85" />
            )
          },
          {
            depth: 0.2,
            invert: true,
            children: <div className="grain absolute inset-0 pointer-events-none" />
          }
        ]}
      />
      <div className="relative z-10 mx-auto flex h-full max-w-[1480px] flex-col px-6 py-12 md:px-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[10px] uppercase tracking-[0.32em] text-white/60"
        >
          <Link href="/" className="hover:text-white">Dholakia Retail</Link>
          <span className="mx-2 text-white/30">/</span>
          <Link href="/portfolio" className="hover:text-white">Portfolio</Link>
          <span className="mx-2 text-white/30">/</span>
          <span className="text-white">Mayavé</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="m-auto text-center text-white"
        >
          <div className="text-[11px] uppercase tracking-[0.32em] text-white/70">
            House 01 · Mayavé
          </div>
          <h1 className="font-display mt-8 text-[clamp(4rem,12vw,11rem)] font-light italic leading-[0.92] tracking-[-0.02em]">
            Mayavé
          </h1>
          <p className="mx-auto mt-7 max-w-[500px] text-[15px] leading-[1.7] text-white/80">
            Bespoke fine jewellery — patiently built, certifiably sourced. Shown by appointment.
          </p>
          <Link
            href="#essence"
            data-cursor="hover"
            className="mt-12 inline-flex items-center gap-3 border border-white/40 px-7 py-4 text-[12px] uppercase tracking-[0.22em] text-white transition-all hover:border-white hover:bg-white hover:text-ink"
          >
            Read the brief
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
