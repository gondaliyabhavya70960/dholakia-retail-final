'use client';
import Reveal from '@/components/motion/Reveal';
import MagneticButton from '@/components/motion/MagneticButton';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomeCTA() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 py-28 md:grid-cols-[1fr_1px_1fr] md:gap-24 md:px-12 md:py-36">
        <Reveal>
          <h2 className="font-display max-w-[440px] text-[clamp(2rem,3.2vw,3.6rem)] font-light leading-[1.1] tracking-[-0.012em] text-ink">
            For partnerships, press, or a private conversation —{' '}
            <span className="italic text-electric">we are listening.</span>
          </h2>
        </Reveal>
        <div className="hidden h-[240px] w-px bg-ink/15 md:block" />
        <Reveal delay={0.15}>
          <div className="md:pl-2">
            <p className="max-w-[420px] text-[15px] leading-[1.8] text-muted">
              The Dholakia Retail team responds to every enquiry within two business days.
              Partnership, investor relations, press, careers and bespoke commissions are routed
              the same day.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <MagneticButton href="/contact">
                Begin a conversation
                <ArrowRight size={14} />
              </MagneticButton>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-ink"
                data-cursor="hover"
              >
                Read about the group
                <span className="h-px w-6 bg-ink transition-all group-hover:w-10 group-hover:bg-electric" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
