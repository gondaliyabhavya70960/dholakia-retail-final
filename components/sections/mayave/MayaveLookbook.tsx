'use client';
import Image from 'next/image';
import Reveal from '@/components/motion/Reveal';

const SHOTS = [
  { src: '/images/lookbook-1.jpg', caption: 'No.01 · Solitaire study' },
  { src: '/images/lookbook-2.jpg', caption: 'No.02 · Bridal commission' },
  { src: '/images/lookbook-3.jpg', caption: 'No.03 · Bench detail' },
  { src: '/images/lookbook-4.jpg', caption: 'No.04 · Stone in transit' },
  { src: '/images/lookbook-5.jpg', caption: 'No.05 · Salon viewing' },
  { src: '/images/lookbook-6.jpg', caption: 'No.06 · Archive plate' }
];

export default function MayaveLookbook() {
  return (
    <section className="overflow-hidden bg-ivory">
      <div className="mx-auto max-w-[1480px] px-6 py-28 md:px-12 md:py-36">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.22em] text-electric">Lookbook</div>
          <h2 className="font-display mt-5 max-w-[760px] text-[clamp(2rem,3.2vw,3.4rem)] font-light leading-[1.1] tracking-[-0.012em] text-ink">
            From the Mayavé archive.
          </h2>
        </Reveal>
      </div>
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-16 pl-6 pr-6 md:pl-12 md:pr-12">
        {SHOTS.map((s, i) => (
          <Reveal key={i} delay={i * 0.04} className="snap-center shrink-0">
            <figure className="w-[80vw] max-w-[640px] md:w-[640px]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={s.src}
                  alt={s.caption}
                  fill
                  sizes="640px"
                  className="object-cover"
                />
              </div>
              <figcaption className="font-display mt-5 text-[18px] font-light italic text-muted">
                {s.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
