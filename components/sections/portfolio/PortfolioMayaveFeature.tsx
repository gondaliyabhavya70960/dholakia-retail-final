'use client';
import Reveal from '@/components/motion/Reveal';
import TiltImage from '@/components/motion/TiltImage';
import MagneticButton from '@/components/motion/MagneticButton';
import { ArrowRight, Gem, Award, Sparkles } from 'lucide-react';

export default function PortfolioMayaveFeature() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto grid min-h-[100vh] max-w-[1480px] grid-cols-1 items-center gap-14 px-6 py-24 md:grid-cols-2 md:gap-20 md:px-12 md:py-32">
        <Reveal>
          <TiltImage
            src="/images/mayave-detail.jpg"
            alt="Mayavé"
            containerClassName="aspect-[4/5] w-full"
            maxAngle={4}
            scale={1.05}
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-electric">
              House 01 · In market
            </div>
            <h2 className="font-display mt-5 text-[clamp(3.6rem,7vw,7rem)] font-light italic leading-[0.95] tracking-[-0.015em] text-ink">
              Mayavé.
            </h2>
            <p className="mt-7 max-w-[460px] text-[16px] leading-[1.85] text-muted">
              Bespoke fine jewellery built around a single discipline — that the most beautiful
              piece in the room should also be the most ethical. Mayavé is conceived in Mumbai,
              built in Surat, and shown by appointment only.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { Icon: Gem, label: 'Heritage' },
                { Icon: Award, label: 'Ethics' },
                { Icon: Sparkles, label: 'Bespoke' }
              ].map((p) => (
                <li key={p.label} className="flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] text-ink/80">
                  <p.Icon size={18} className="text-electric" />
                  {p.label}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <MagneticButton href="/portfolio/mayave">
                Discover Mayavé
                <ArrowRight size={14} />
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
