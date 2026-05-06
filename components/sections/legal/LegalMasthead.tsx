import Image from 'next/image';
import Reveal from '@/components/motion/Reveal';

export default function LegalMasthead({
  eyebrow,
  title,
  lastUpdated,
  effective,
  version,
  imageSrc = '/images/legal-banner.jpg'
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  effective: string;
  version: string;
  imageSrc?: string;
}) {
  return (
    <>
      {/* Cinematic banner strip */}
      <section className="relative h-[42vh] min-h-[320px] w-full overflow-hidden bg-ink">
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-ivory" />
      </section>

      {/* Title slab */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[880px] px-6 pb-14 pt-14 md:px-8 md:pb-20 md:pt-20">
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
    </>
  );
}
