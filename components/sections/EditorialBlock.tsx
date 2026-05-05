'use client';
import Reveal from '@/components/motion/Reveal';

export default function EditorialBlock({
  eyebrow,
  heading,
  paragraphs,
  pullquote
}: {
  eyebrow?: string;
  heading?: string;
  paragraphs: string[];
  pullquote?: { quote: string; attribution?: string };
}) {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[760px] px-6 py-28 md:py-36">
        {eyebrow && (
          <Reveal>
            <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-electric">
              {eyebrow}
            </div>
          </Reveal>
        )}
        {heading && (
          <Reveal>
            <h2 className="font-display mt-7 text-[clamp(2.2rem,3.4vw,3.6rem)] font-light leading-[1.12] tracking-[-0.012em] text-ink">
              {heading}
            </h2>
          </Reveal>
        )}
        <div className="mt-12 space-y-8">
          {paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              {i === 0 && eyebrow ? (
                <p className="text-[16.5px] leading-[1.85] text-ink/85">
                  <span className="font-display float-left mr-2 text-[5rem] font-light italic leading-[0.85] text-electric">
                    {p[0]}
                  </span>
                  {p.slice(1)}
                </p>
              ) : (
                <p className="text-[16.5px] leading-[1.85] text-ink/85">{p}</p>
              )}
              {pullquote && i === Math.floor(paragraphs.length / 2) - 1 && (
                <blockquote className="my-12 border-l-2 border-electric pl-7">
                  <p className="font-display text-[clamp(1.4rem,2.2vw,2.2rem)] font-light italic leading-[1.3] text-ink">
                    “{pullquote.quote}”
                  </p>
                  {pullquote.attribution && (
                    <footer className="mt-4 text-[11px] uppercase tracking-[0.22em] text-muted">
                      — {pullquote.attribution}
                    </footer>
                  )}
                </blockquote>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
