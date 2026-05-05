'use client';
import Reveal from '@/components/motion/Reveal';
import MagneticButton from '@/components/motion/MagneticButton';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function PageCloser({
  statement,
  body,
  primary,
  secondary
}: {
  statement: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-ivory">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 py-28 md:grid-cols-[1fr_1px_1fr] md:gap-24 md:px-12 md:py-36">
        <Reveal>
          <h2 className="font-display max-w-[460px] text-[clamp(2rem,3.2vw,3.4rem)] font-light leading-[1.1] tracking-[-0.012em] text-ink">
            {statement.split(/\b/).map((p, i) => {
              if (p.startsWith('*')) {
                return (
                  <span key={i} className="italic text-electric">
                    {p.replace(/\*/g, '')}
                  </span>
                );
              }
              return <span key={i}>{p}</span>;
            })}
          </h2>
        </Reveal>
        <div className="hidden h-[220px] w-px bg-ink/15 md:block" />
        <Reveal delay={0.15}>
          <div>
            <p className="max-w-[440px] text-[15px] leading-[1.85] text-muted">{body}</p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <MagneticButton href={primary.href}>
                {primary.label}
                <ArrowRight size={14} />
              </MagneticButton>
              {secondary && (
                <Link
                  href={secondary.href}
                  data-cursor="hover"
                  className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-ink"
                >
                  {secondary.label}
                  <span className="h-px w-6 bg-ink transition-all group-hover:w-10 group-hover:bg-electric" />
                </Link>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
