'use client';
import Reveal from '@/components/motion/Reveal';

export default function MayaveEssence() {
  return (
    <section id="essence" className="bg-ivory">
      <div className="mx-auto max-w-[680px] px-6 py-28 md:py-44">
        <Reveal>
          <p className="text-[16.5px] leading-[1.9] text-ink/85">
            <span className="font-display float-left mr-3 text-[6rem] font-light italic leading-[0.85] text-electric">
              M
            </span>
            ayavé began as a question — what should an Indian luxury jewellery house look like in
            2026, when the world is paying attention to provenance, to ethics, to craft? Not a
            louder version of what came before. Not a costume of European luxury imported into
            Mumbai. Something quieter, more accountable, rooted in stones we already know.
          </p>
        </Reveal>

        {[
          'The atelier sits inside the Surat Diamond Bourse, three floors above the rough-stone trading hall where the Dholakia family has worked for forty years. Every Mayavé piece begins here — with a stone we have lived with since it was rough. By the time it reaches the bench, we have certified it three times: once at extraction, once at cutting, once at setting.',
          'Our pieces are not seasonal. We do not chase a collection cadence. A Mayavé piece is conceived when we believe we have something to say. It is photographed for the archive, fitted to a single client, and sent with a hand-written certificate that names every stone, every weight, every signature.'
        ].map((p, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <p className="mt-7 text-[16.5px] leading-[1.9] text-ink/85">{p}</p>
          </Reveal>
        ))}

        <Reveal delay={0.3}>
          <blockquote className="my-14 border-l-2 border-electric pl-7">
            <p className="font-display text-[clamp(1.4rem,2.2vw,2.2rem)] font-light italic leading-[1.3] text-ink">
              “The most beautiful piece in the room should also be the most ethical. Anything less is decoration.”
            </p>
          </blockquote>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="text-[16.5px] leading-[1.9] text-ink/85">
            Mayavé is shown by appointment. We believe a piece of fine jewellery deserves a
            conversation, a setting, and a witness — not a photograph and a checkout button.
          </p>
          <p className="mt-12 text-right font-display text-[1.4rem] font-light italic text-muted">
            — Mayavé Atelier
          </p>
        </Reveal>
      </div>
    </section>
  );
}
