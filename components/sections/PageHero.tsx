'use client';
import ParallaxScene from '@/components/motion/ParallaxScene';
import Image from 'next/image';
import Eyebrow from './Eyebrow';
import { motion } from 'framer-motion';

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  imageSrc: string;
  variant?: 'split' | 'fullbleed';
};

/**
 * Reusable editorial hero used across most pages. Splits image left + content
 * right with a 3-layer mouse parallax scene on the image side.
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  imageSrc,
  variant = 'split'
}: Props) {
  if (variant === 'fullbleed') {
    return (
      <section className="relative h-[88vh] w-full overflow-hidden bg-ink">
        <ParallaxScene
          className="absolute inset-0"
          amplitude={36}
          layers={[
            {
              depth: 1,
              children: (
                <div className="absolute -inset-[5%]">
                  <Image
                    src={imageSrc}
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover scale-105"
                  />
                </div>
              )
            },
            {
              depth: 0.4,
              invert: true,
              children: (
                <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/70" />
              )
            }
          ]}
        />
        <div className="relative z-10 mx-auto flex h-full max-w-[1480px] flex-col justify-end px-6 pb-20 md:px-12 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="max-w-[820px] text-ivory"
          >
            <Eyebrow className="text-electric/90">{eyebrow}</Eyebrow>
            <h1 className="font-display mt-6 text-[clamp(2.5rem,6.5vw,5.5rem)] font-light leading-[1.02] tracking-[-0.01em]">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-7 max-w-[560px] text-[16px] leading-[1.7] text-ivory/80">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative grid min-h-[88vh] w-full grid-cols-1 overflow-hidden bg-ivory lg:grid-cols-[58%_42%]">
      {/* Image side with parallax */}
      <div className="relative h-[55vh] overflow-hidden lg:h-auto">
        <ParallaxScene
          className="absolute inset-0"
          amplitude={32}
          layers={[
            {
              depth: 1,
              children: (
                <div className="absolute -inset-[6%]">
                  <Image
                    src={imageSrc}
                    alt=""
                    fill
                    priority
                    sizes="60vw"
                    className="object-cover scale-105"
                  />
                </div>
              )
            },
            {
              depth: 0.3,
              invert: true,
              children: <div className="absolute inset-0 bg-ink/8" />
            }
          ]}
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/30 to-transparent" />
      </div>

      {/* Content side */}
      <div className="flex items-center border-l border-ink/10 px-6 py-16 md:px-14 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="max-w-[480px]"
        >
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="font-display mt-6 text-[clamp(2.4rem,4.6vw,4.6rem)] font-light leading-[1.02] tracking-[-0.01em] text-ink">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-7 text-[16px] leading-[1.7] text-muted">{subtitle}</p>
          )}
          <div className="mt-10 h-px w-12 bg-electric" />
        </motion.div>
      </div>
    </section>
  );
}
