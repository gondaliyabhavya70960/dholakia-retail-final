'use client';
import Image from 'next/image';
import Reveal from '@/components/motion/Reveal';

const FACTS = [
  { label: 'Founded', value: '2025', tag: 'In market', image: '/images/lookbook-1.jpg' },
  { label: 'Atelier', value: 'Surat Diamond Bourse', tag: '5,400 sq ft', image: '/images/facility-2.jpg' },
  { label: 'Certifications', value: 'RJC · KP · SCS-007', tag: 'End-to-end', image: '/images/atelier-tools.jpg' },
  { label: 'Pieces shipped', value: 'By appointment', tag: 'Bespoke only', image: '/images/lookbook-6.jpg' }
];

export default function MayaveFacts() {
  return (
    <section className="bg-bone/30">
      <div className="mx-auto max-w-[860px] px-6 py-28 md:py-36">
        <Reveal>
          <div className="text-center text-[11px] uppercase tracking-[0.22em] text-electric">
            Brand facts
          </div>
          <h2 className="font-display mt-5 text-center text-[clamp(2rem,3.2vw,3.2rem)] font-light leading-[1.1] tracking-[-0.012em] text-ink">
            On record. <span className="italic text-muted">In ledger. In stone.</span>
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
          {FACTS.map((f, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="grid grid-cols-[1fr_64px] items-center gap-6 py-7 md:grid-cols-[28%_38%_18%_72px]">
                <div className="text-[11px] uppercase tracking-[0.22em] text-muted">{f.label}</div>
                <div className="font-display col-span-2 text-[clamp(1.4rem,2vw,2rem)] font-light italic text-ink md:col-span-1">
                  {f.value}
                </div>
                <div className="hidden text-right text-[12px] uppercase tracking-[0.18em] text-electric md:block">
                  {f.tag}
                </div>
                <div className="relative aspect-square h-16 w-16 overflow-hidden border border-ink/10 bg-white md:h-[72px] md:w-[72px]">
                  <Image
                    src={f.image}
                    alt={`${f.label} — ${f.value}`}
                    fill
                    sizes="72px"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
