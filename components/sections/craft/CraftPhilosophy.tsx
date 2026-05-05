'use client';
import Reveal from '@/components/motion/Reveal';

const CHAPTERS = [
  {
    n: '01',
    title: 'Patience over performance',
    body:
      'A Mayavé piece may take three months at the bench. We will not cut a corner to ship a season. We measure a maker by what they refuse to release.'
  },
  {
    n: '02',
    title: 'One stone, three certifications',
    body:
      'Every stone is examined at extraction, at cutting, and at setting. We log the weight, the colour, the clarity, and the conscience of every diamond we touch.'
  },
  {
    n: '03',
    title: 'The piece is the proof',
    body:
      'We do not market what is on the bench. We finish it, photograph it for the archive, and send it to the family who commissioned it. Marketing is a side-effect of craft.'
  }
];

export default function CraftPhilosophy() {
  return (
    <section className="bg-bone/30">
      <div className="mx-auto max-w-[760px] px-6 py-28 md:py-36">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.22em] text-electric">
            Three disciplines
          </div>
          <h2 className="font-display mt-5 text-[clamp(2rem,3.2vw,3.4rem)] font-light leading-[1.1] tracking-[-0.012em] text-ink">
            How we measure a maker.
          </h2>
        </Reveal>
        <div className="mt-16 divide-y divide-ink/10">
          {CHAPTERS.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.08}>
              <div className="py-14">
                <div className="font-display text-[clamp(4rem,7vw,6rem)] font-light italic leading-none text-electric/85">
                  {c.n}
                </div>
                <h3 className="font-display mt-7 text-[clamp(1.6rem,2.4vw,2.4rem)] font-light leading-tight text-ink">
                  {c.title}
                </h3>
                <p className="mt-5 text-[15.5px] leading-[1.85] text-muted">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
