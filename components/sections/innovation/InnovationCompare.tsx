'use client';
import Reveal from '@/components/motion/Reveal';
import { Check, X } from 'lucide-react';

const ROWS = [
  { c: 'Origin', natural: 'Earth — 1–3 billion years', lgd: 'CVD chamber — 14 weeks', dho: 'Both, fully traceable' },
  { c: 'Sourcing', natural: 'Kimberley Process', lgd: 'SCS-007 (preferred)', dho: 'Both, audited' },
  { c: 'Carbon footprint', natural: 'Variable, often opaque', lgd: 'Watt-hour audited', dho: 'Renewable-powered partners only' },
  { c: 'Certification', natural: 'GIA / IGI', lgd: 'IGI / GCAL / SCS', dho: 'GIA + ledger' },
  { c: 'Pricing', natural: 'Premium', lgd: '60–80% lower', dho: 'Transparent, by piece' }
];

export default function InnovationCompare() {
  return (
    <section className="bg-bone/30">
      <div className="mx-auto max-w-[1080px] px-6 py-28 md:px-12 md:py-36">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.22em] text-electric">
            Quality & relevance
          </div>
          <h2 className="font-display mt-5 text-[clamp(2rem,3.2vw,3.2rem)] font-light leading-[1.1] tracking-[-0.012em] text-ink">
            Natural · Lab-grown · Dholakia.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-[14.5px]">
              <thead>
                <tr className="border-b border-ink/20">
                  <th className="py-5 pr-6 text-[11px] uppercase tracking-[0.22em] text-muted">
                    Criteria
                  </th>
                  <th className="py-5 pr-6 text-[11px] uppercase tracking-[0.22em] text-muted">
                    Natural
                  </th>
                  <th className="py-5 pr-6 text-[11px] uppercase tracking-[0.22em] text-muted">
                    Lab-grown
                  </th>
                  <th className="border-l-2 border-electric py-5 pl-6 text-[11px] uppercase tracking-[0.22em] text-electric">
                    Dholakia approach
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r, i) => (
                  <tr key={i} className="border-b border-ink/10 align-top">
                    <td className="py-6 pr-6 font-medium text-ink">{r.c}</td>
                    <td className="py-6 pr-6 text-muted">{r.natural}</td>
                    <td className="py-6 pr-6 text-muted">{r.lgd}</td>
                    <td className="border-l-2 border-electric py-6 pl-6 text-ink">{r.dho}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
