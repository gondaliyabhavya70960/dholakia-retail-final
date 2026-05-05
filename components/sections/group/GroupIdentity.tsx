'use client';
import Reveal from '@/components/motion/Reveal';
import { Building2, MapPin, FileText, Calendar } from 'lucide-react';

const FACTS = [
  {
    Icon: Building2,
    label: 'Entity',
    value: 'Dholakia Retail Pvt. Ltd.'
  },
  {
    Icon: FileText,
    label: 'CIN',
    value: 'U32111GJ2024PTC155690'
  },
  {
    Icon: Calendar,
    label: 'Founded',
    value: '2024'
  },
  {
    Icon: MapPin,
    label: 'Registered office',
    value: 'Surat Diamond Bourse, Gujarat'
  }
];

export default function GroupIdentity() {
  return (
    <section className="bg-bone/30">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.22em] text-electric">
            Corporate identity
          </div>
          <h2 className="font-display mt-5 max-w-[700px] text-[clamp(1.8rem,2.8vw,2.8rem)] font-light leading-[1.15] text-ink">
            On record. <span className="italic text-muted">In ledger. In stone.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {FACTS.map((f, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="group relative h-full border border-ink/10 bg-white p-8 transition-colors hover:border-electric md:p-10">
                <f.Icon size={22} className="text-electric" />
                <div className="mt-7 text-[11px] uppercase tracking-[0.22em] text-muted">
                  {f.label}
                </div>
                <div className="font-display mt-3 text-[clamp(1.2rem,1.8vw,1.8rem)] font-light italic leading-tight text-ink">
                  {f.value}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
