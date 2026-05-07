'use client';
import Image from 'next/image';
import Reveal from '@/components/motion/Reveal';
import MouseParallax from '@/components/motion/MouseParallax';

/**
 * Cinematic 16:9 image feature with caption.
 * Full-width frame, gradient bottom, eyebrow + caption text.
 */
export default function MediaFeature({
  imageSrc,
  alt,
  eyebrow,
  caption,
  meta,
  bg = 'ivory'
}: {
  imageSrc: string;
  alt: string;
  eyebrow?: string;
  caption?: string;
  meta?: string;
  bg?: 'ivory' | 'ink' | 'offwhite';
}) {
  const bgClass =
    bg === 'ink' ? 'bg-ink text-ivory' : bg === 'offwhite' ? 'bg-offwhite' : 'bg-ivory';
  return (
    <section className={bgClass}>
      <div className="mx-auto max-w-[1480px] px-6 py-24 md:px-12 md:py-32">
        {eyebrow && (
          <Reveal>
            <div
              className={`text-[11px] uppercase tracking-[0.22em] ${
                bg === 'ink' ? 'text-electric' : 'text-electric'
              }`}
            >
              {eyebrow}
            </div>
          </Reveal>
        )}
        <Reveal delay={0.1}>
          <MouseParallax strength={20} className="mt-8">
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={imageSrc}
                alt={alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
              {caption && (
                <>
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/70 to-transparent" />
                  <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-6 md:inset-x-10 md:bottom-8">
                    <div className="font-display max-w-[640px] text-[clamp(1.1rem,1.6vw,1.5rem)] font-light italic leading-snug text-ivory">
                      {caption}
                    </div>
                    {meta && (
                      <div className="hidden text-[10px] uppercase tracking-[0.32em] text-ivory/80 md:block">
                        {meta}
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </MouseParallax>
        </Reveal>
      </div>
    </section>
  );
}
