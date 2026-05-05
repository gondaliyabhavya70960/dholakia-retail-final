'use client';
import Reveal from '@/components/motion/Reveal';

const FACTS = [
  { label: 'Founded', value: '2025', tag: 'In market' },
  { label: 'Atelier', value: 'Surat Diamond Bourse', tag: '5,400 sq ft' },
  { label: 'Certifications', value: 'RJC · KP · SCS-007', tag: 'End-to-end' },
  { label: 'Pieces shipped', value: 'By appointment', tag: 'Bespoke only' }
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
              <div className="grid grid-cols-2 items-center gap-6 py-7 md:grid-cols-[40%_40%_20%]">
                <div className="text-[11px] uppercase tracking-[0.22em] text-muted">{f.label}</div>
                <div className="font-display text-[clamp(1.4rem,2vw,2rem)] font-light italic text-ink">
                  {f.value}
                </div>
                <div className="text-right text-[12px] uppercase tracking-[0.18em] text-electric">
                  {f.tag}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
