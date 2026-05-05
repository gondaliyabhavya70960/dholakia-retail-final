'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '@/components/motion/Reveal';
import { Telescope, HandCoins, FileSearch, Hourglass, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const PILLARS = [
  {
    Icon: Telescope,
    label: 'Traceability',
    title: 'Every stone, on the record.',
    body:
      'We work only with stones we can trace from extraction (or growth) to setting. Our lab-grown intake is SCS-007 certified; mined stones carry Kimberley Process certification and RJC supplier audits.'
  },
  {
    Icon: HandCoins,
    label: 'Responsible creation',
    title: 'Bench, atelier, supplier — all audited.',
    body:
      'Wages, hours, conditions, and safety are audited annually across our supplier base. Our Surat atelier is RJC-aligned with quarterly internal review and bi-annual external audit.'
  },
  {
    Icon: FileSearch,
    label: 'Transparency',
    title: 'Publish what we measure.',
    body:
      'Our annual ESG report covers Scope 1, 2, and 3 emissions, water and energy intensity, supplier audits, traceability metrics, and the percentage of intake from lab-grown channels.'
  },
  {
    Icon: Hourglass,
    label: 'Long-term value',
    title: 'A piece that lasts a century.',
    body:
      'A Mayavé piece is conceived for permanence — repaired, reset, restored across generations. Built-to-last is the cheapest, slowest, and most defensible form of sustainability.'
  }
];

export default function SustainPillars() {
  const [active, setActive] = useState(0);
  const a = PILLARS[active];
  return (
    <section id="pillars" className="bg-ivory">
      <div className="mx-auto max-w-[1280px] px-6 py-28 md:px-12 md:py-36">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.22em] text-electric">
            Four responsibility pillars
          </div>
          <h2 className="font-display mt-5 max-w-[760px] text-[clamp(2rem,3.2vw,3.4rem)] font-light leading-[1.1] tracking-[-0.012em] text-ink">
            What we owe — and what we keep.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-wrap gap-2 border-b border-ink/15">
            {PILLARS.map((p, i) => (
              <button
                key={i}
                data-cursor="hover"
                onClick={() => setActive(i)}
                className={`relative flex items-center gap-2 px-5 py-4 text-[12px] uppercase tracking-[0.18em] transition-colors ${
                  active === i ? 'text-electric' : 'text-muted hover:text-ink'
                }`}
              >
                <p.Icon size={15} />
                {p.label}
                {active === i && (
                  <motion.div
                    layoutId="pill-underline"
                    className="absolute -bottom-px left-0 h-[2px] w-full bg-electric"
                  />
                )}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid h-32 w-32 place-items-center rounded-full border border-electric/30 bg-electric/5"
            >
              <a.Icon size={42} className="text-electric" />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="font-display text-[clamp(1.8rem,2.6vw,2.6rem)] font-light leading-[1.15] text-ink">
                {a.title}
              </h3>
              <p className="mt-6 max-w-[560px] text-[15.5px] leading-[1.85] text-muted">{a.body}</p>
              <Link
                href="/news"
                data-cursor="hover"
                className="mt-7 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-electric"
              >
                Read the report
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
