'use client';
import Image from 'next/image';
import Reveal from '@/components/motion/Reveal';
import { Atom, Microscope, Beaker, FlaskConical } from 'lucide-react';

const PANELS = [
  {
    Icon: Atom,
    title: 'Carbon, but kinder',
    body:
      'Mined and lab-grown diamonds are chemically identical — pure carbon. The difference is the chamber, the energy, the audit trail, and the impact on land and water.',
    image: '/images/innovation-1.jpg'
  },
  {
    Icon: Microscope,
    title: 'A seed becomes a stone',
    body:
      'A natural-diamond seed sits inside a CVD chamber. Microwave plasma breaks down carbon-rich gas, and atoms drift into place — building a gemmological match in fourteen weeks.',
    image: '/images/lgd-1.jpg'
  },
  {
    Icon: Beaker,
    title: 'Powered by accountability',
    body:
      'Every Mayavé lab-grown stone is grown with renewable energy at an SCS-007 certified partner facility — watt-hour audited from day one.',
    image: '/images/lgd-2.jpg'
  },
  {
    Icon: FlaskConical,
    title: 'Indistinguishable, but legible',
    body:
      'A trained gemmologist requires laboratory tools to distinguish a CVD-grown diamond from a mined one. The provenance, however, is legible from the first invoice.',
    image: '/images/innovation-2.jpg'
  }
];

export default function InnovationLGD() {
  return (
    <section className="overflow-hidden bg-ivory">
      <div className="mx-auto max-w-[1480px] px-6 py-28 md:px-12 md:py-36">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.22em] text-electric">
            The lab-grown diamond story
          </div>
          <h2 className="font-display mt-5 max-w-[760px] text-[clamp(2rem,3.2vw,3.4rem)] font-light leading-[1.1] tracking-[-0.012em] text-ink">
            Four panels — from chamber to setting.
          </h2>
        </Reveal>
      </div>
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-16 pl-6 pr-6 md:pl-12 md:pr-12">
        {PANELS.map((p, i) => (
          <Reveal key={i} delay={i * 0.05} className="snap-center shrink-0">
            <div className="flex h-[560px] w-[78vw] max-w-[460px] flex-col overflow-hidden border border-ink/15 bg-white md:w-[440px]">
              <div className="relative h-[200px] w-full overflow-hidden bg-ink/5">
                <Image
                  src={p.image}
                  alt={`${p.title} — lab-grown diamond panel`}
                  fill
                  sizes="(min-width:768px) 440px, 78vw"
                  className="object-cover"
                />
                <div className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-ivory/90">
                  <p.Icon size={20} className="text-electric" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-10">
                <div className="text-[10px] uppercase tracking-[0.22em] text-electric">Panel {String(i + 1).padStart(2, '0')}</div>
                <h3 className="font-display mt-4 text-[clamp(1.5rem,2vw,2rem)] font-light leading-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-5 text-[14.5px] leading-[1.85] text-muted">{p.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
