'use client';
import Reveal from '@/components/motion/Reveal';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const STATS = [
  { eyebrow: 'Founded', value: '2024', context: 'Surat · Gujarat · India' },
  { eyebrow: 'Houses', value: '01', context: 'Mayavé — flagship' },
  { eyebrow: 'In development', value: '03', context: 'Future territories' },
  { eyebrow: 'Heritage', value: '40+', context: 'Years in stones' }
];

export default function HomeSnapshot() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[1480px] px-6 py-28 md:px-12 md:py-36">
        <Reveal>
          <h2 className="font-display mx-auto max-w-[940px] text-center text-[clamp(2.2rem,3.6vw,3.8rem)] font-light leading-[1.1] tracking-[-0.012em] text-ink">
            Built in 2024. <span className="italic text-electric/90">Built to last.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-[640px] text-center text-[15px] leading-[1.8] text-muted">
            Dholakia Retail Private Limited · CIN U32111GJ2024PTC155690 · A privately held parent
            company headquartered at the Surat Diamond Bourse.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-20 grid grid-cols-2 divide-y divide-ink/10 border-y border-ink/10 md:grid-cols-4 md:divide-x md:divide-y-0">
            {STATS.map((s, i) => (
              <div key={i} className="px-6 py-12 md:py-16">
                <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
                  {s.eyebrow}
                </div>
                <div className="font-display mt-4 text-[clamp(2.6rem,4.2vw,4.6rem)] font-light italic leading-none text-ink">
                  {s.value}
                </div>
                <div className="mt-4 text-[13px] text-muted">{s.context}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mx-auto mt-12 h-px w-32 bg-electric" />
        </Reveal>
      </div>
    </section>
  );
}
