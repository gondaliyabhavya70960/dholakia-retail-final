'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Newspaper, Users, Sparkles, ArrowRight } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';

const TABS = [
  {
    label: 'Business',
    Icon: Briefcase,
    desc: 'Partnerships, distribution, investor relations and strategic introductions. The business desk replies within 48 hours.',
    href: '#form?type=partnership'
  },
  {
    label: 'Press',
    Icon: Newspaper,
    desc: 'Journalists, broadcasters and editors — the press desk replies within 24 hours and provides press kits, fact sheets and approved imagery.',
    href: '#form?type=press'
  },
  {
    label: 'Careers',
    Icon: Users,
    desc: 'Open roles, apprenticeships, and speculative applications. The talent team replies within five business days.',
    href: '#form?type=careers'
  },
  {
    label: 'Brand',
    Icon: Sparkles,
    desc: 'Mayavé bespoke commissions, private viewings, and editorial collaborations. The brand desk replies within 48 hours.',
    href: '#form?type=brand'
  }
];

export default function ContactRouting() {
  const [active, setActive] = useState(0);
  const a = TABS[active];
  return (
    <section className="bg-bone/30">
      <div className="mx-auto max-w-[1080px] px-6 py-24 md:px-12 md:py-32">
        <Reveal>
          <h2 className="font-display text-center text-[clamp(2rem,3vw,3rem)] font-light leading-[1.1] tracking-[-0.012em] text-ink">
            Where would you like to land?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-2 gap-2 border-b border-ink/15 md:grid-cols-4">
            {TABS.map((t, i) => (
              <button
                key={t.label}
                data-cursor="hover"
                onClick={() => setActive(i)}
                className={`relative flex flex-col items-center gap-3 px-4 py-6 text-[12px] uppercase tracking-[0.22em] transition-colors ${
                  active === i ? 'text-electric' : 'text-muted hover:text-ink'
                }`}
              >
                <t.Icon size={22} />
                {t.label}
                {active === i && (
                  <motion.div
                    layoutId="contact-tab"
                    className="absolute -bottom-px left-0 h-[2px] w-full bg-electric"
                  />
                )}
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
            className="mx-auto mt-12 max-w-[640px] text-center"
          >
            <p className="text-[15.5px] leading-[1.85] text-ink/85">{a.desc}</p>
            <a
              href={a.href}
              data-cursor="hover"
              className="mt-7 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-electric"
            >
              Get in touch
              <ArrowRight size={14} />
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
