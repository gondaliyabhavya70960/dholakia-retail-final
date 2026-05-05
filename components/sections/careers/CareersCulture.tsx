'use client';
import Image from 'next/image';
import Reveal from '@/components/motion/Reveal';
import MouseParallax from '@/components/motion/MouseParallax';

export default function CareersCulture() {
  return (
    <section className="bg-bone/30">
      <div className="mx-auto max-w-[1480px] px-6 pt-28 md:px-12 md:pt-36">
        <Reveal>
          <MouseParallax strength={16} className="relative aspect-[16/8] w-full overflow-hidden">
            <Image
              src="/images/careers-environment.jpg"
              alt="Inside the Surat atelier — daily work"
              fill
              sizes="100vw"
              className="object-cover grayscale-[0.55]"
              style={{ transform: 'scale(1.06)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-[11px] uppercase tracking-[0.22em] text-white/85 md:bottom-10 md:left-12">
              Surat atelier · the daily work
            </div>
          </MouseParallax>
        </Reveal>
      </div>
      <div className="mx-auto max-w-[760px] px-6 py-24 md:py-32">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.22em] text-electric">Our culture</div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-10 text-[clamp(1.2rem,1.6vw,1.4rem)] leading-[1.7] text-ink/85">
            Dholakia Retail is a slow company in a fast industry. We take our time with stones, with
            people, with decisions. We believe in{' '}
            <em className="text-electric not-italic font-display italic text-[1.2em]">
              ambition with discipline
            </em>
            ,{' '}
            <em className="text-electric not-italic font-display italic text-[1.2em]">
              craft with modernity
            </em>
            , and{' '}
            <em className="text-electric not-italic font-display italic text-[1.2em]">
              ownership with integrity
            </em>
            . We protect the maker. We document the work. We pay people fairly, audit ourselves
            publicly, and treat every visit to the bench — by a journalist, an investor, a client —
            as a chance to be honest about how things are made. If that sounds like a place you want
            to spend a decade, we are reading.
          </p>
          <p className="font-display mt-12 text-right text-[1.3rem] font-light italic text-muted">
            — The team, Surat
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-[1fr_240px] md:items-center md:gap-12">
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-electric">Meet a team lead</div>
              <h3 className="font-display mt-5 text-[clamp(1.4rem,2vw,2rem)] font-light leading-tight text-ink">
                &ldquo;A decade is the right unit of time.&rdquo;
              </h3>
              <p className="mt-5 text-[15.5px] leading-[1.85] text-muted">
                Our managers are makers first. Every team you join is led by someone who has spent
                years at the bench, in the field, or beside the auditor — someone who can teach the
                craft because they still practise it.
              </p>
            </div>
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-ink/10 bg-white md:max-w-[240px]">
              <Image
                src="/images/careers-manager.jpg"
                alt="Team lead portrait — Surat"
                fill
                sizes="(min-width:768px) 240px, 100vw"
                className="object-cover grayscale"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
