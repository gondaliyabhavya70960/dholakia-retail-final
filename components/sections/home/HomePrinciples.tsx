'use client';
import { Compass, Gem, ShieldCheck } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';
import TiltImage from '@/components/motion/TiltImage';

const PRINCIPLES = [
  {
    n: '01',
    Icon: Compass,
    title: 'Editorial discipline',
    body:
      'Every house in our portfolio is built with the patience of a magazine and the rigour of a maison. Restraint is the strategy; we differentiate not through volume but through voice.',
    image: '/images/atelier-hands-1.jpg'
  },
  {
    n: '02',
    Icon: Gem,
    title: 'Material integrity',
    body:
      'Stones are sourced through Kimberley Process and Responsible Jewellery Council (RJC) channels; lab-grown diamonds carry SCS-007 certification. Provenance is recorded at the bench.',
    image: '/images/gem-loose.jpg'
  },
  {
    n: '03',
    Icon: ShieldCheck,
    title: 'Governance with conscience',
    body:
      'A board chartered for stewardship, not show. We publish what we measure, certify what we publish, and answer to the families, partners and stones in our care.',
    image: '/images/portrait-2.jpg'
  }
];

export default function HomePrinciples() {
  return (
    <section className="relative bg-bone/40">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
        <Reveal>
          <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-electric">
            Three guiding principles
          </div>
          <h2 className="font-display mt-6 max-w-[820px] text-[clamp(2rem,3.2vw,3.4rem)] font-light leading-[1.1] tracking-[-0.01em] text-ink">
            How we build, what we keep, and what we refuse to compromise.
          </h2>
        </Reveal>

        <div className="mt-20 space-y-28">
          {PRINCIPLES.map((p, i) => (
            <div
              key={p.n}
              className={`grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20 ${
                i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <Reveal>
                <TiltImage
                  src={p.image}
                  alt={p.title}
                  containerClassName="aspect-[4/5] w-full"
                  maxAngle={4}
                  scale={1.05}
                />
              </Reveal>
              <Reveal delay={0.1}>
                <div>
                  <div className="font-display text-[5rem] font-light italic leading-none text-electric/80">
                    {p.n}
                  </div>
                  <div className="mt-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
                    <p.Icon size={18} className="text-electric" />
                    Principle {p.n}
                  </div>
                  <h3 className="font-display mt-5 text-[clamp(1.8rem,2.6vw,2.8rem)] font-light leading-[1.15] text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-6 max-w-[480px] text-[15px] leading-[1.85] text-muted">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
