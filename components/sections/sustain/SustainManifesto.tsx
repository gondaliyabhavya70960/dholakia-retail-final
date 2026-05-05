'use client';
import Image from 'next/image';
import Reveal from '@/components/motion/Reveal';

export default function SustainManifesto() {
  return (
    <section className="relative overflow-hidden bg-ink py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
        <Image
          src="/images/editorial-2.jpg"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover"
          style={{ transform: 'scale(1.08)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink/80" />
      </div>
      <div className="relative z-10 mx-auto max-w-[820px] px-6">
        <Reveal>
          <div className="border border-electric bg-ivory p-10 md:p-16">
            <div className="text-[11px] uppercase tracking-[0.22em] text-electric">
              The Sustainability Charter
            </div>
            <h2 className="font-display mt-5 text-[clamp(1.8rem,2.6vw,2.6rem)] font-light leading-[1.18] text-ink">
              Article one — we will not sell what we cannot certify.
            </h2>
            <div className="mt-8 space-y-6 text-[15.5px] leading-[1.9] text-ink/85">
              <p>
                We commit to publishing what we measure, certifying what we publish, and answering
                to the families, partners, and stones in our care. We do not market ahead of the
                bench. We do not declare ahead of the audit.
              </p>
              <p>
                Where the world&apos;s standards are inadequate to the moment — in mined-stone
                provenance, in lab-grown energy intensity, in artisan welfare — we will adopt the
                strictest available, contribute to its development, and publish our methodology.
              </p>
              <p>
                A Mayavé piece is built for permanence. The Dholakia Retail charter is built for
                accountability. Both are signed by hand, dated, and held by the people who must
                live with the work.
              </p>
            </div>
            <p className="font-display mt-10 text-right text-[1.2rem] font-light italic text-muted">
              — Signed, the founding board · 2024
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
