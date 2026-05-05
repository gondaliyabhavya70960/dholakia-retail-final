'use client';
import Image from 'next/image';
import Reveal from '@/components/motion/Reveal';
import ParallaxScene from '@/components/motion/ParallaxScene';
import Link from 'next/link';

export default function CraftEcosystem() {
  return (
    <section className="relative h-[100vh] min-h-[640px] w-full overflow-hidden bg-ink">
      <ParallaxScene
        className="absolute inset-0"
        amplitude={36}
        layers={[
          {
            depth: 1,
            children: (
              <div className="absolute -inset-[8%]">
                <Image
                  src="/images/facility-1.jpg"
                  alt="Surat facility"
                  fill
                  sizes="100vw"
                  className="object-cover scale-110"
                />
              </div>
            )
          },
          {
            depth: 0.4,
            invert: true,
            children: (
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/30" />
            )
          }
        ]}
      />
      <div className="relative z-10 flex h-full items-end px-6 pb-16 md:px-12 md:pb-24">
        <Reveal>
          <div className="max-w-[640px] border-t-2 border-electric bg-ivory/95 p-8 backdrop-blur md:p-12">
            <div className="text-[11px] uppercase tracking-[0.22em] text-electric">
              Surat · The making ecosystem
            </div>
            <h2 className="font-display mt-5 text-[clamp(1.8rem,2.8vw,2.8rem)] font-light leading-[1.12] text-ink">
              A 5,400 sq ft atelier, three floors above the rough-stone trading hall.
            </h2>
            <p className="mt-5 max-w-[520px] text-[15px] leading-[1.85] text-muted">
              Every Mayavé piece is conceived, drawn, prototyped, set and certified within the
              same building where the family has worked since 1982. Provenance ends and begins on
              the same staircase.
            </p>
            <Link
              href="/global"
              data-cursor="hover"
              className="mt-7 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-electric"
            >
              Visit our global presence
              <span className="h-px w-6 bg-electric" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
