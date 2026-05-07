'use client';
import Reveal from '@/components/motion/Reveal';

type Props = {
  /** Embed URL ready to drop into <iframe src=>. */
  src: string;
  title: string;
  /** Aspect ratio class. Defaults to video (16:9). Use 'aspect-[9/16]' for vertical. */
  aspect?: string;
  eyebrow?: string;
  caption?: string;
  /** External link to original source (TikTok / Instagram / YouTube watch page). */
  sourceLabel?: string;
  sourceHref?: string;
  bg?: 'ivory' | 'ink' | 'offwhite';
  /** Cap inner width \u2014 vertical embeds usually want 480px max. */
  maxWidth?: string;
};

/**
 * Drop-in iframe embed for web-sourced videos (TikTok, Instagram, YouTube).
 * Matches the editorial layout of MediaFeature.
 */
export default function EmbeddedVideo({
  src,
  title,
  aspect = 'aspect-video',
  eyebrow,
  caption,
  sourceLabel,
  sourceHref,
  bg = 'ivory',
  maxWidth = 'max-w-[1280px]'
}: Props) {
  const bgClass =
    bg === 'ink' ? 'bg-ink text-ivory' : bg === 'offwhite' ? 'bg-offwhite' : 'bg-ivory';
  return (
    <section className={bgClass}>
      <div className={`mx-auto ${maxWidth} px-6 py-24 md:px-12 md:py-32`}>
        {eyebrow && (
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.22em] text-electric">
              {eyebrow}
            </div>
          </Reveal>
        )}
        <Reveal delay={0.1}>
          <div
            className={`relative ${aspect} w-full overflow-hidden bg-ink ${
              eyebrow ? 'mt-8' : ''
            }`}
          >
            <iframe
              src={src}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </Reveal>
        {(caption || sourceHref) && (
          <Reveal delay={0.18}>
            <div
              className={`mt-6 flex flex-wrap items-center justify-between gap-4 border-t pt-6 text-[12px] ${
                bg === 'ink' ? 'border-ivory/15' : 'border-ink/15'
              }`}
            >
              {caption && (
                <p
                  className={`max-w-[640px] text-[14px] leading-[1.7] ${
                    bg === 'ink' ? 'text-ivory/75' : 'text-muted'
                  }`}
                >
                  {caption}
                </p>
              )}
              {sourceHref && (
                <a
                  href={sourceHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-electric"
                >
                  {sourceLabel ?? 'Watch on source'} ↗
                </a>
              )}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
