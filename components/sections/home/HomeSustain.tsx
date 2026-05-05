'use client';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/motion/Reveal';
import MouseParallax from '@/components/motion/MouseParallax';
import { ArrowUpRight } from 'lucide-react';

export default function HomeSustain() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[1480px] px-6 pt-32 md:px-12 md:pt-44">
        <Reveal>
          <MouseParallax strength={18} className="relative aspect-[16/7] w-full overflow-hidden">
            <Image
              src="/images/sustainability-2.jpg"
              alt="River and earth — the source of every stone"
              fill
              priority={false}
              sizes="100vw"
              className="object-cover"
              style={{ transform: 'scale(1.08)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-[11px] uppercase tracking-[0.22em] text-white/85 md:bottom-10 md:left-12">
              Mission river · The water we owe back
            </div>
          </MouseParallax>
        </Reveal>
      </div>
      <div className="mx-auto max-w-[1280px] px-6 py-32 md:px-12 md:py-44">
        <Reveal>
          <p className="font-display mx-auto max-w-[920px] text-center text-[clamp(2rem,4vw,3.6rem)] font-light italic leading-[1.18] tracking-[-0.01em] text-ink">
            &ldquo;The earth gave us these stones. Our craft, our care, our conscience —
            <span className="text-electric"> these are what we owe back.</span>&rdquo;
          </p>
          <p className="mt-8 text-center text-[12px] uppercase tracking-[0.22em] text-muted">
            — Founding statement, Sustainability Charter
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-24 grid grid-cols-2 gap-8 border-t border-ink/10 pt-12 md:grid-cols-4">
            {[
              { v: '100%', k: 'Kimberley Process certified' },
              { v: '37B', k: 'Litres of water saved (LGD)' },
              { v: '0', k: 'Conflict-zone sourcing' },
              { v: 'RJC', k: 'Responsible Jewellery Council' }
            ].map((m, i) => (
              <div key={i}>
                <div className="font-display text-[clamp(1.8rem,2.6vw,2.6rem)] font-light italic leading-none text-electric">
                  {m.v}
                </div>
                <div className="mt-3 text-[12px] uppercase tracking-[0.18em] text-muted">
                  {m.k}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/sustainability"
              data-cursor="hover"
              className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-electric"
            >
              See our commitments
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
