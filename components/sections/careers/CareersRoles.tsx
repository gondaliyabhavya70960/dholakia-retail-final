'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';
import { careerRoles } from '@/lib/content';

const FUNCTIONS = [
  {
    name: 'Atelier & bench',
    body: 'Master jewellers, setters, polishers, finishers, and our four-year apprenticeship programme. Surat-based.',
    open: 4
  },
  {
    name: 'Brand & creative',
    body: 'Editorial direction, art direction, copywriting and brand systems for the houses. Mumbai or Surat.',
    open: 2
  },
  {
    name: 'Materials & innovation',
    body: 'Gemmology, lab-grown diamond science, traceability infrastructure, supplier audit. Mostly Surat.',
    open: 3
  },
  {
    name: 'Sustainability & ESG',
    body: 'ESG reporting, supplier audit, water & energy intensity measurement, charter programmes.',
    open: 1
  },
  {
    name: 'Finance & governance',
    body: 'Audit, controls, reporting, IR, investor materials and risk. Mumbai-led.',
    open: 1
  },
  {
    name: 'Talent & people',
    body: 'Recruitment, learning & development, the apprenticeship programme. Surat-led.',
    open: 1
  }
];

export default function CareersRoles() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="roles" className="bg-ivory">
      <div className="mx-auto max-w-[820px] px-6 py-28 md:py-36">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.22em] text-electric">
            Open functions
          </div>
          <h2 className="font-display mt-5 text-[clamp(2rem,3.2vw,3.4rem)] font-light leading-[1.1] tracking-[-0.012em] text-ink">
            Where the work is happening.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12 divide-y divide-ink/15 border-y border-ink/15">
            {FUNCTIONS.map((f, i) => (
              <div key={f.name}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  data-cursor="hover"
                  className="grid w-full grid-cols-[1fr_auto_24px] items-center gap-6 py-7 text-left transition-colors hover:bg-bone/30"
                >
                  <div>
                    <div className="font-display text-[clamp(1.4rem,2vw,2rem)] font-light leading-tight text-ink">
                      {f.name}
                    </div>
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-electric">
                    {f.open} open
                  </div>
                  <motion.div
                    animate={{ rotate: open === i ? 90 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ChevronRight size={18} className="text-electric" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-9">
                        <p className="max-w-[600px] text-[15px] leading-[1.85] text-muted">
                          {f.body}
                        </p>
                        <div className="mt-7 space-y-2">
                          {careerRoles
                            .filter((r) => r.fn === f.name)
                            .map((r) => (
                              <Link
                                key={r.slug}
                                href={`/careers/${r.slug}`}
                                data-cursor="hover"
                                className="group/role flex items-center justify-between gap-4 border-t border-ink/10 py-3 text-left transition-colors hover:border-electric"
                              >
                                <span className="font-display text-[1.05rem] font-light text-ink transition-colors group-hover/role:text-electric">
                                  {r.title}
                                </span>
                                <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-electric">
                                  {r.location}
                                  <ArrowUpRight size={12} />
                                </span>
                              </Link>
                            ))}
                          {careerRoles.filter((r) => r.fn === f.name).length === 0 && (
                            <div className="text-[12px] uppercase tracking-[0.18em] text-muted">
                              Roles open to expressions of interest — write to careers@dholakiaretail.com.
                            </div>
                          )}
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
