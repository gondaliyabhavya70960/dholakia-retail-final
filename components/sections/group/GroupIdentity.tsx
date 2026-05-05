'use client';
import Image from 'next/image';
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
          <div className="mx-auto max-w-[480px]">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink/5 shadow-[0_18px_50px_-20px_rgba(11,20,38,0.35)]">
              <Image
                src="/images/founder-portrait.jpg"
                alt="Founding director portrait — Dholakia Retail"
                fill
                sizes="(min-width: 768px) 480px, 100vw"
                className="object-cover grayscale"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_50%,rgba(11,20,38,0.18)_100%)]" />
            </div>
            <p className="mt-5 text-center text-[11px] uppercase tracking-[0.22em] text-muted">
              Founding director · Surat, 2024
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 text-[11px] uppercase tracking-[0.22em] text-electric">
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
