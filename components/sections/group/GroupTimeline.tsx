'use client';
import Reveal from '@/components/motion/Reveal';
import { motion } from 'framer-motion';

const MILESTONES = [
  {
    year: '1982',
    title: 'The first stone',
    body: 'The Dholakia family begins polishing rough diamonds in Surat. Forty years of upstream expertise begin here.'
  },
  {
    year: '2018',
    title: 'A vision in writing',
    body: 'Internal memo: a brand-led parent company to bring family stones to a global editorial audience under maison structure.'
  },
  {
    year: '2024',
    title: 'Dholakia Retail incorporated',
    body: 'CIN U32111GJ2024PTC155690. Registered at the Surat Diamond Bourse. The parent house is born.'
  },
  {
    year: '2025',
    title: 'Mayavé · the first house',
    body: 'Mayavé Atelier opens its first private viewing salon. RJC and Kimberley Process certified end-to-end.'
  },
  {
    year: '2026',
    title: 'The horizon',
    body: 'Three new houses in development. Sustainability Charter, IR fact sheet, and editorial roadmap published.'
  }
];

export default function GroupTimeline() {
  return (
    <section id="timeline" className="overflow-hidden bg-bone/30">
      <div className="mx-auto max-w-[1480px] px-6 py-28 md:px-12 md:py-36">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.22em] text-electric">Heritage</div>
          <h2 className="font-display mt-5 max-w-[760px] text-[clamp(2rem,3.2vw,3.6rem)] font-light leading-[1.1] tracking-[-0.012em] text-ink">
            Forty years of stones, written across one timeline.
          </h2>
        </Reveal>

        <div className="mt-16 flex snap-x snap-mandatory gap-8 overflow-x-auto pb-10">
          {MILESTONES.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="snap-center shrink-0 border border-ink/10 bg-white p-10 md:w-[400px]"
              style={{ width: 'min(86vw, 400px)' }}
            >
              <div className="font-display text-[clamp(3.4rem,5vw,5rem)] font-light italic leading-none text-electric">
                {m.year}
              </div>
              <h3 className="font-display mt-7 text-[1.6rem] font-light leading-tight text-ink">
                {m.title}
              </h3>
              <p className="mt-5 text-[15px] leading-[1.85] text-muted">{m.body}</p>
              <div className="mt-7 h-px w-12 bg-electric" />
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-4 flex items-center gap-4 text-[11px] uppercase tracking-[0.22em] text-muted">
            <span className="h-px flex-1 bg-ink/15" />
            Drag, scroll, or arrow-key
            <span className="h-px flex-1 bg-ink/15" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
