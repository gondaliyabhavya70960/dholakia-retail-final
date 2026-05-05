'use client';
import Image from 'next/image';
import Reveal from '@/components/motion/Reveal';
import { motion } from 'framer-motion';

const MILESTONES = [
  {
    year: '1982',
    title: 'The first stone',
    body: 'The Dholakia family begins polishing rough diamonds in Surat. Forty years of upstream expertise begin here.',
    image: '/images/timeline-1.jpg'
  },
  {
    year: '2018',
    title: 'A vision in writing',
    body: 'Internal memo: a brand-led parent company to bring family stones to a global editorial audience under maison structure.',
    image: '/images/timeline-2.jpg'
  },
  {
    year: '2024',
    title: 'Dholakia Retail incorporated',
    body: 'CIN U32111GJ2024PTC155690. Registered at the Surat Diamond Bourse. The parent house is born.',
    image: '/images/timeline-3.jpg'
  },
  {
    year: '2025',
    title: 'Mayavé · the first house',
    body: 'Mayavé Atelier opens its first private viewing salon. RJC and Kimberley Process certified end-to-end.',
    image: '/images/mayave-detail.jpg'
  },
  {
    year: '2026',
    title: 'The horizon',
    body: 'Three new houses in development. Sustainability Charter, IR fact sheet, and editorial roadmap published.',
    image: '/images/lookbook-2.jpg'
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
              className="snap-center shrink-0 overflow-hidden border border-ink/10 bg-white md:w-[420px]"
              style={{ width: 'min(86vw, 420px)' }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink/5">
                <Image
                  src={m.image}
                  alt={`${m.year} — ${m.title}`}
                  fill
                  sizes="(min-width:768px) 420px, 86vw"
                  className="object-cover sepia-[0.08] grayscale-[0.45] transition-transform duration-700 hover:scale-[1.04]"
                />
                <div className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.22em] text-white/85">
                  Archive · {m.year}
                </div>
              </div>
              <div className="p-10">
                <div className="font-display text-[clamp(3.4rem,5vw,5rem)] font-light italic leading-none text-electric">
                  {m.year}
                </div>
                <h3 className="font-display mt-7 text-[1.6rem] font-light leading-tight text-ink">
                  {m.title}
                </h3>
                <p className="mt-5 text-[15px] leading-[1.85] text-muted">{m.body}</p>
                <div className="mt-7 h-px w-12 bg-electric" />
              </div>
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
