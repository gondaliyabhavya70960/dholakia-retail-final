'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';
import MouseParallax from '@/components/motion/MouseParallax';

/**
 * P01-S06 — Brand Film section.
 * Cinematic 16:9 still, light-shaft factory study. The image carries the
 * narrative; we frame it as a film still with editorial credit lines.
 */
export default function HomeBrandFilm() {
  return (
    <section className="bg-ink text-ivory">
      <div className="mx-auto max-w-[1480px] px-6 py-28 md:px-12 md:py-40">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto] md:items-end md:gap-20">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.22em] text-electric">
              The Brand Film
            </div>
            <h2 className="font-display mt-5 max-w-[720px] text-[clamp(2.4rem,4.6vw,4.6rem)] font-light leading-[1.05] tracking-[-0.012em]">
              Forty years of bench discipline, distilled
              <span className="italic text-ivory/70"> into a single morning of light.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-[360px] text-[15px] leading-[1.8] text-ivory/70">
              An editorial portrait of the Surat workshop at first light — empty benches, steel
              tooling, the cool quiet that precedes a working day. Filmed in the spring of 2026.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <MouseParallax strength={22} className="mt-16 md:mt-24">
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src="/images/optB-home-brand-film.jpg"
                alt="The Surat atelier at first light — workshop floor, raking northern windows"
                fill
                sizes="100vw"
                className="object-cover"
              />
              {/* Cinematic letterbox + caption gradient */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/80 to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-end justify-between gap-6 md:bottom-10 md:left-10 md:right-10">
                <div className="text-[10px] uppercase tracking-[0.32em] text-ivory/80">
                  Surat · 06:42 · April 2026
                </div>
              </div>
              <div className="absolute bottom-6 right-6 hidden text-[10px] uppercase tracking-[0.32em] text-ivory/80 md:block md:bottom-10 md:right-10">
                Brand Film · No.01
              </div>
            </div>
          </MouseParallax>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-12 flex items-center justify-between gap-8 border-t border-ivory/15 pt-8">
            <div className="text-[11px] uppercase tracking-[0.22em] text-ivory/60">
              Direction · Dholakia Retail Studio · 2026
            </div>
            <Link
              href="/craftsmanship"
              data-cursor="hover"
              className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-electric transition-colors hover:text-ivory"
            >
              See the bench
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
