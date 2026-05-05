'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';
import MouseParallax from '@/components/motion/MouseParallax';
import TiltImage from '@/components/motion/TiltImage';

export default function HomePortfolio() {
  return (
    <section className="relative bg-bone/30">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-10 px-6 py-32 text-center md:px-12 md:py-44">
        <Reveal>
          <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-electric">
            Featured house
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <MouseParallax strength={20}>
            <div className="relative mx-auto w-[min(640px,86vw)]">
              <TiltImage
                src="/images/mayave-piece.jpg"
                alt="Mayavé signature piece"
                containerClassName="aspect-[4/5] w-full shadow-[0_30px_80px_-30px_rgba(11,20,38,0.25)]"
                maxAngle={3}
                scale={1.04}
              />
            </div>
          </MouseParallax>
        </Reveal>

        <Reveal delay={0.2}>
          <h2 className="font-display text-[clamp(3rem,6vw,6rem)] font-light italic leading-none tracking-[-0.015em] text-ink">
            Mayavé
          </h2>
          <p className="mx-auto mt-6 max-w-[520px] text-[16px] leading-[1.75] text-muted">
            Bespoke fine jewellery — patiently built, certifiably sourced, museum-grade
            craftsmanship. The first house under Dholakia Retail.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <Link
            href="/portfolio/mayave"
            data-cursor="hover"
            className="group mt-4 inline-flex items-center gap-3 bg-electric px-8 py-4 text-[12px] uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-royal"
          >
            Discover Mayavé
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
