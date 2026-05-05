import Reveal from '@/components/motion/Reveal';

export type LegalSection = {
  number: string;
  title: string;
  paragraphs: string[];
  list?: string[];
};

export default function LegalBody({ sections }: { sections: LegalSection[] }) {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[880px] px-6 pb-32 md:px-8 md:pb-40">
        <div className="space-y-16 md:space-y-20">
          {sections.map((s, i) => (
            <Reveal key={s.number} delay={(i % 4) * 0.04}>
              <article className="grid gap-6 md:grid-cols-[96px_1fr] md:gap-8">
                <div className="font-display text-[clamp(2.4rem,4vw,4rem)] font-light italic leading-none text-electric">
                  {s.number}
                </div>
                <div className="max-w-[720px]">
                  <h2 className="font-display text-[clamp(1.4rem,2vw,1.85rem)] font-light leading-[1.18] tracking-[-0.01em] text-ink">
                    {s.title}
                  </h2>
                  <div className="mt-5 space-y-5 text-[15.5px] leading-[1.85] text-ink/85">
                    {s.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                    {s.list && (
                      <ul className="mt-6 space-y-3 border-l border-ink/15 pl-6">
                        {s.list.map((li, idx) => (
                          <li key={idx} className="text-[15px] leading-[1.8] text-ink/80">
                            {li}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
