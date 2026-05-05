'use client';
import Image from 'next/image';
import Reveal from '@/components/motion/Reveal';
import TiltImage from '@/components/motion/TiltImage';
import { Linkedin } from 'lucide-react';

const LEADERS = [
  {
    name: 'Kaushik Dholakia',
    role: 'Chairman & Managing Director',
    image: '/images/portrait-1.jpg',
    bio: 'A second-generation custodian of the family stones business, Kaushik founded Dholakia Retail in 2024 to bring four decades of upstream expertise into a brand-led, editorial maison structure. He chairs the board and the Sustainability Committee.'
  },
  {
    name: 'Ananya Sheth',
    role: 'Director, Houses & Brand',
    image: '/images/portrait-2.jpg',
    bio: 'Formerly at LVMH and Chanel Joaillerie Paris, Ananya leads brand strategy, creative direction, and the architecture under which future houses are built. She is the first signatory on every house\'s editorial charter.'
  },
  {
    name: 'Vikram Mehta',
    role: 'Director, Operations & Supply',
    image: '/images/portrait-3.jpg',
    bio: 'Vikram oversees the manufacturing ecosystem, traceability infrastructure, and supplier governance. A graduate of GIA Carlsbad with twenty years on the bench, he is responsible for material integrity end-to-end.'
  },
  {
    name: 'Priya Raman',
    role: 'Director, Finance & Governance',
    image: '/images/portrait-4.jpg',
    bio: 'Priya, a Chartered Accountant with prior tenure at KPMG and the Tata Group, leads finance, audit, risk, and ESG reporting. She chairs the Audit Committee.'
  }
];

export default function GroupLeadership() {
  return (
    <section id="leadership" className="bg-ivory">
      <div className="mx-auto max-w-[1080px] px-6 py-28 md:px-12 md:py-36">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.22em] text-electric">Leadership</div>
          <h2 className="font-display mt-5 max-w-[760px] text-[clamp(2rem,3.2vw,3.6rem)] font-light leading-[1.1] tracking-[-0.012em] text-ink">
            The board, in their own hand.
          </h2>
        </Reveal>

        <div className="mt-20 space-y-20">
          {LEADERS.map((l, i) => (
            <div
              key={l.name}
              className={`grid grid-cols-1 items-center gap-10 border-t border-ink/10 pt-16 md:grid-cols-[40%_60%] md:gap-14 ${
                i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <Reveal>
                <TiltImage
                  src={l.image}
                  alt={l.name}
                  containerClassName="aspect-[4/5] w-full grayscale"
                  maxAngle={3}
                  scale={1.03}
                />
              </Reveal>
              <Reveal delay={0.1}>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-muted">
                    {l.role}
                  </div>
                  <h3 className="font-display mt-3 text-[clamp(1.8rem,2.4vw,2.6rem)] font-light leading-[1.15] text-ink">
                    {l.name}
                  </h3>
                  <p className="mt-6 max-w-[480px] text-[15px] leading-[1.85] text-muted">
                    {l.bio}
                  </p>
                  <a
                    href="#"
                    className="mt-7 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-electric"
                    data-cursor="hover"
                  >
                    <Linkedin size={14} /> LinkedIn
                  </a>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-20 flex flex-wrap items-center gap-6 border-t border-ink/10 pt-10 text-[12px] uppercase tracking-[0.18em] text-muted">
            <a href="#" className="hover:text-electric" data-cursor="hover">Governance Framework</a>
            <span className="h-3 w-px bg-ink/20" />
            <a href="#" className="hover:text-electric" data-cursor="hover">Code of Conduct</a>
            <span className="h-3 w-px bg-ink/20" />
            <a href="#" className="hover:text-electric" data-cursor="hover">Ethical Sourcing Charter</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
