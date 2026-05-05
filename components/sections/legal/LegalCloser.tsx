import Reveal from '@/components/motion/Reveal';

export default function LegalCloser({
  statement,
  email,
  signature
}: {
  statement: string;
  email: string;
  signature: string;
}) {
  return (
    <section className="bg-offwhite">
      <div className="mx-auto grid min-h-[60vh] max-w-[1080px] place-items-center px-6 py-24 md:px-12 md:py-32">
        <div className="max-w-[820px] text-center">
          <Reveal>
            <p className="font-display text-[clamp(1.6rem,2.6vw,2.4rem)] font-light italic leading-[1.3] tracking-[-0.01em] text-ink">
              {statement}{' '}
              <a
                href={`mailto:${email}`}
                data-cursor="hover"
                className="border-b border-electric/40 text-electric transition-colors hover:border-electric"
              >
                {email}
              </a>
              .
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mx-auto mt-12 h-px w-16 bg-ink/20" />
            <div className="mt-6 text-[11px] uppercase tracking-[0.22em] text-muted">{signature}</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
