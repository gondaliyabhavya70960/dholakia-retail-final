'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import ParallaxScene from '@/components/motion/ParallaxScene';
import Eyebrow from '../Eyebrow';

export default function HomeHero() {
  return (
    <section className="relative grid h-[100vh] grid-cols-1 overflow-hidden bg-ivory lg:grid-cols-[60%_40%]">
      {/* Left — cinematic image with multi-layer mouse parallax */}
      <div className="relative h-[55vh] overflow-hidden bg-ink lg:h-auto">
        <ParallaxScene
          className="absolute inset-0"
          amplitude={42}
          layers={[
            // Background layer — deepest
            {
              depth: 1,
              children: (
                <div className="absolute -inset-[8%]">
                  <Image
                    src="/images/hero-diamond.jpg"
                    alt="Hero"
                    fill
                    priority
                    sizes="60vw"
                    className="object-cover scale-110"
                  />
                </div>
              )
            },
            // Mid — gradient overlay, counter-direction
            {
              depth: 0.45,
              invert: true,
              children: (
                <div className="absolute inset-0 bg-gradient-to-br from-ink/30 via-ink/10 to-ink/60" />
              )
            },
            // Foreground — fine grain, opposite drift
            {
              depth: 0.18,
              invert: true,
              children: (
                <div className="absolute inset-0 grain pointer-events-none" />
              )
            }
          ]}
        />

        {/* Floating breadcrumb-like watermark in the image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-10 left-10 z-10 text-ivory/70"
        >
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.32em]">
            <span className="h-px w-8 bg-ivory/60" />
            Surat — Mumbai — World
          </div>
        </motion.div>
      </div>

      {/* Right — content panel */}
      <div className="relative flex flex-col justify-center border-l border-ink/10 px-7 py-14 md:px-14 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="max-w-[460px]"
        >
          <Eyebrow>Dholakia Retail · Est. 2024</Eyebrow>
          <h1 className="font-display mt-7 text-[clamp(2.6rem,4.2vw,4.6rem)] font-light leading-[1.02] tracking-[-0.015em] text-ink">
            A house of houses.
            <br />
            <span className="italic text-electric">Built to last.</span>
          </h1>
          <p className="mt-8 max-w-[420px] text-[15px] leading-[1.75] text-muted">
            We are the parent company behind a curated portfolio of luxury jewellery brands —
            beginning with Mayavé. Editorial, ethical, engineered.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <Link
              href="/portfolio"
              data-cursor="hover"
              className="group inline-flex items-center gap-3 bg-electric px-7 py-4 text-[12px] uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-royal"
            >
              Explore the portfolio
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-ink transition-colors hover:text-electric"
              data-cursor="hover"
            >
              The Group
              <span className="h-px w-6 bg-ink transition-all duration-300 group-hover:w-10 group-hover:bg-electric" />
            </Link>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{
            opacity: { delay: 1.2, duration: 0.6 },
            y: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute bottom-8 right-8 hidden items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-muted md:flex"
        >
          Scroll
          <ChevronDown size={14} />
        </motion.div>
      </div>
    </section>
  );
}
