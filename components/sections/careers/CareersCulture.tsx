'use client';
import Reveal from '@/components/motion/Reveal';

export default function CareersCulture() {
  return (
    <section className="bg-bone/30">
      <div className="mx-auto max-w-[760px] px-6 py-32 md:py-44">
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
      </div>
    </section>
  );
}
