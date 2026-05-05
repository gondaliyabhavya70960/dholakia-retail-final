'use client';
import Image from 'next/image';
import Reveal from '@/components/motion/Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const TERRITORIES = [
  {
    n: '02',
    name: 'Sūtra',
    window: '2027 · in development',
    body:
      'A men’s collection — patrician, austere, conceived for the modern gentleman who measures sophistication in stones, not logos. Currently in design with the Mayavé atelier.',
    image: '/images/territory-1.jpg'
  },
  {
    n: '03',
    name: 'Anaita',
    window: '2027 · in development',
    body:
      'A bridal house, traditional in form and contemporary in conscience — every set traceable, every diamond ethically grown or sourced. Culturally Indian, globally engineered.',
    image: '/images/territory-2.jpg'
  },
  {
    n: '04',
    name: 'Atlas',
    window: '2028 · concept',
    body:
      'A travel-and-trophy house — single statement objects for collectors, executives and museums. Lab-grown stones, recycled gold, archival cases.',
    image: '/images/territory-3.jpg'
  },
  {
    n: '05',
    name: 'Untitled',
    window: '2029 · concept',
    body:
      'An open chapter. The next house has not been named. We do not write the brief until we are ready to ship the brief.',
    image: '/images/lookbook-5.jpg'
  }
];

export default function PortfolioFuture() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="future" className="bg-bone/30">
      <div className="mx-auto max-w-[1080px] px-6 py-28 md:px-12 md:py-36">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.22em] text-electric">
            On the horizon
          </div>
          <h2 className="font-display mt-5 max-w-[820px] text-[clamp(2rem,3.2vw,3.4rem)] font-light leading-[1.12] tracking-[-0.012em] text-ink">
            Houses in development. <span className="italic text-muted">None will ship before they are ready.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-16 divide-y divide-ink/10 border-y border-ink/10">
            {TERRITORIES.map((t, i) => (
              <div key={t.n}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  data-cursor="hover"
                  className="grid w-full grid-cols-[60px_1fr_24px] items-center gap-6 py-8 text-left transition-colors hover:bg-white md:py-10"
                >
                  <span className="font-display text-[2rem] font-light italic text-electric">
                    {t.n}
                  </span>
                  <span>
                    <span className="font-display block text-[clamp(1.6rem,2.4vw,2.4rem)] font-light leading-none text-ink">
                      {t.name}
                    </span>
                    <span className="mt-2 block text-[11px] uppercase tracking-[0.22em] text-muted">
                      {t.window}
                    </span>
                  </span>
                  <motion.span
                    animate={{ rotate: open === i ? 90 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ChevronRight size={20} className="text-electric" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-[60px_1fr] gap-6 pb-10 md:gap-10 md:pb-12">
                        <span />
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_280px]">
                          <p className="max-w-[640px] text-[15px] leading-[1.85] text-muted">{t.body}</p>
                          <div className="relative aspect-[4/5] w-full overflow-hidden border border-ink/10 bg-white">
                            <Image
                              src={t.image}
                              alt={`${t.name} — reference imagery`}
                              fill
                              sizes="(min-width:768px) 280px, 100vw"
                              className="object-cover"
                            />
                            <div className="absolute left-3 top-3 bg-ivory/90 px-2 py-1 text-[10px] uppercase tracking-[0.22em] text-electric">
                              Coming soon
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
