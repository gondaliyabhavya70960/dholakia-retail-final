import Reveal from '@/components/motion/Reveal';

export default function LegalMasthead({
  eyebrow,
  title,
  lastUpdated,
  effective,
  version
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  effective: string;
  version: string;
}) {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[880px] px-6 pb-14 pt-32 md:px-8 md:pb-20 md:pt-40">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.22em] text-electric">{eyebrow}</div>
          <h1 className="font-display mt-5 text-[clamp(3rem,5vw,4.5rem)] font-light italic leading-[1.05] tracking-[-0.014em] text-ink">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-ink/15 pt-6 text-[11px] uppercase tracking-[0.2em] text-muted">
            <span>
              Last updated <span className="ml-2 text-ink">{lastUpdated}</span>
            </span>
            <span className="hidden h-3 w-px bg-ink/15 md:block" />
            <span>
              Effective <span className="ml-2 text-ink">{effective}</span>
            </span>
            <span className="hidden h-3 w-px bg-ink/15 md:block" />
            <span>
              Version <span className="ml-2 text-ink">{version}</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
