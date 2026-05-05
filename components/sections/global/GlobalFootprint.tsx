'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '@/components/motion/Reveal';

const LOCATIONS = [
  {
    n: '01',
    city: 'Surat',
    role: 'Atelier · Provenance',
    address: 'Surat Diamond Bourse, Gujarat 395008',
    body: 'The making ecosystem. Stones, cutters, setters, master jewellers, archive. Every Mayavé piece is born here.'
  },
  {
    n: '02',
    city: 'Mumbai',
    role: 'Brand · Salon · Partnerships',
    address: 'Bandra-Kurla Complex, Mumbai 400051',
    body: 'Brand strategy, creative direction, private viewings for the Indian market, and the editorial team that writes the houses.'
  },
  {
    n: '03',
    city: 'International',
    role: 'Salon · By appointment',
    address: 'Dubai · London · Geneva · Singapore · New York · By season',
    body: 'A travelling salon. We host curated viewings each season for a small group of collectors, journalists and partners.'
  }
];

export default function GlobalFootprint() {
  const [active, setActive] = useState(0);
  const a = LOCATIONS[active];
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[1280px] px-6 py-28 md:px-12 md:py-36">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.22em] text-electric">
            Ecosystem footprint
          </div>
          <h2 className="font-display mt-5 max-w-[760px] text-[clamp(2rem,3.2vw,3.4rem)] font-light leading-[1.1] tracking-[-0.012em] text-ink">
            Three locations. <span className="italic text-muted">Three roles.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-20 hidden md:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-1/2 h-px bg-ink/15" />
              <div className="relative grid grid-cols-3 gap-4">
                {LOCATIONS.map((l, i) => (
                  <button
                    key={l.n}
                    data-cursor="hover"
                    onClick={() => setActive(i)}
                    className="flex flex-col items-center gap-4 py-8"
                  >
                    <div
                      className={`grid h-16 w-16 place-items-center rounded-full border-2 transition-all ${
                        active === i
                          ? 'border-electric bg-electric text-white'
                          : 'border-ink/20 bg-white text-ink hover:border-electric'
                      }`}
                    >
                      <span className="font-display text-xl italic">{l.n}</span>
                    </div>
                    <div
                      className={`font-display text-[1.5rem] font-light leading-tight transition-colors ${
                        active === i ? 'text-electric' : 'text-ink'
                      }`}
                    >
                      {l.city}
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-muted">
                      {l.role}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile stack */}
          <div className="mt-12 flex flex-col gap-4 md:hidden">
            {LOCATIONS.map((l, i) => (
              <button
                key={l.n}
                onClick={() => setActive(i)}
                className={`flex items-center gap-4 border p-5 text-left ${
                  active === i ? 'border-electric bg-electric/5' : 'border-ink/15 bg-white'
                }`}
              >
                <div
                  className={`grid h-12 w-12 place-items-center rounded-full ${
                    active === i ? 'bg-electric text-white' : 'bg-bone text-ink'
                  }`}
                >
                  <span className="font-display text-lg italic">{l.n}</span>
                </div>
                <div>
                  <div className="font-display text-xl text-ink">{l.city}</div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-muted">{l.role}</div>
                </div>
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-16 max-w-[640px] border-l-2 border-electric pl-7"
          >
            <div className="text-[11px] uppercase tracking-[0.22em] text-muted">{a.address}</div>
            <p className="mt-5 text-[15.5px] leading-[1.85] text-ink/85">{a.body}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
