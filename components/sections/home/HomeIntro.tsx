'use client';
import Reveal from '@/components/motion/Reveal';

export default function HomeIntro() {
  return (
    <section className="relative bg-ivory py-32 md:py-44">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-14 px-6 md:grid-cols-[40%_60%] md:gap-20 md:px-12">
        <div className="relative">
          <div
            className="absolute left-0 top-0 hidden md:block"
            style={{
              transform: 'rotate(-90deg)',
              transformOrigin: 'left top'
            }}
          >
            <div className="font-display whitespace-nowrap text-[5rem] font-light italic leading-none tracking-[-0.02em] text-electric/80">
              our ethos —
            </div>
          </div>
          <Reveal>
            <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-electric md:hidden">
              Our ethos
            </div>
            <div className="mt-6 hidden h-[240px] w-px bg-electric md:block" />
          </Reveal>
        </div>

        <div className="md:pl-12">
          <Reveal>
            <h2 className="font-display text-[clamp(2.2rem,3.6vw,3.8rem)] font-light leading-[1.1] tracking-[-0.012em] text-ink">
              Restraint over ornament. Permanence over season.{' '}
              <span className="italic text-muted">A quiet confidence.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-[560px] text-[16px] leading-[1.8] text-muted">
              Dholakia Retail was incorporated in 2024 to build the next generation of Indian
              luxury jewellery houses with the cadence and discipline of the world&apos;s great
              maisons. We do not chase trends. We do not chase scale. We invest in craft, in
              ethics, in time — and we let the work speak for itself.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
