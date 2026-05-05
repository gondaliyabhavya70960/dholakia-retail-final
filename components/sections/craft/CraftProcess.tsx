'use client';
import Image from 'next/image';
import Reveal from '@/components/motion/Reveal';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Compass, Pencil, Hammer, Diamond, ShieldCheck } from 'lucide-react';

const STEPS = [
  {
    n: '01',
    Icon: Compass,
    title: 'Conception',
    body:
      'A piece begins with a conversation — with the client, the stone, the occasion. We sketch by hand and present the brief on paper before a single CAD line is drawn.',
    image: '/images/process-1.jpg'
  },
  {
    n: '02',
    Icon: Pencil,
    title: 'Drawing & wax',
    body:
      'Every Mayavé piece is rendered in CAD, printed in wax, fitted to the client, and revised at least three times before metal is committed.',
    image: '/images/process-2.jpg'
  },
  {
    n: '03',
    Icon: Hammer,
    title: 'Bench',
    body:
      'A single master jeweller carries the piece from cast to polish. No subdivision, no assembly-line — the maker’s rhythm becomes part of the object.',
    image: '/images/process-3.jpg'
  },
  {
    n: '04',
    Icon: Diamond,
    title: 'Setting & stones',
    body:
      'Setters work under loupe and microscope. Each stone is laid by hand, each prong measured to the tenth of a millimetre, each facet aligned to the architectural intent.',
    image: '/images/process-4.jpg'
  },
  {
    n: '05',
    Icon: ShieldCheck,
    title: 'Certification & archive',
    body:
      'A hand-written certificate names every stone, every weight, every signature. The piece is photographed for the Mayavé archive before it leaves the atelier.',
    image: '/images/atelier-tools.jpg'
  }
];

export default function CraftProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 30%'] });
  const railHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="bg-ivory" ref={ref}>
      <div className="mx-auto max-w-[820px] px-6 py-28 md:py-36">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.22em] text-electric">
            From idea to archive
          </div>
          <h2 className="font-display mt-5 text-[clamp(2rem,3.2vw,3.4rem)] font-light leading-[1.1] tracking-[-0.012em] text-ink">
            Five steps, three months, one maker.
          </h2>
        </Reveal>
        <div className="relative mt-20 pl-12 md:pl-16">
          <div className="absolute left-3 top-0 h-full w-px bg-ink/15 md:left-4" />
          <motion.div
            className="absolute left-3 top-0 w-px bg-electric md:left-4"
            style={{ height: railHeight }}
          />
          <div className="space-y-20">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.04}>
                <div className="relative">
                  <div className="absolute -left-[44px] top-2 grid h-7 w-7 place-items-center rounded-full border border-electric bg-ivory md:-left-[58px]">
                    <s.Icon size={14} className="text-electric" />
                  </div>
                  <div className="grid gap-8 md:grid-cols-[1fr_220px] md:items-center md:gap-12">
                    <div>
                      <div className="font-display text-[2rem] font-light italic leading-none text-electric/80">
                        {s.n}
                      </div>
                      <h3 className="font-display mt-4 text-[clamp(1.5rem,2vw,2rem)] font-light leading-tight text-ink">
                        {s.title}
                      </h3>
                      <p className="mt-4 max-w-[540px] text-[15.5px] leading-[1.85] text-muted">
                        {s.body}
                      </p>
                    </div>
                    <div className="relative aspect-square w-full overflow-hidden border border-ink/10 bg-white md:max-w-[220px]">
                      <Image
                        src={s.image}
                        alt={`${s.title} — atelier process`}
                        fill
                        sizes="220px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
