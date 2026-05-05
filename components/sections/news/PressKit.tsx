import { Download, FileText, ImageIcon, BookOpen, Mail } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';

const ASSETS = [
  {
    Icon: ImageIcon,
    title: 'Group logo pack',
    desc: 'Vector marks (SVG, EPS) and bitmap logos (PNG) for editorial use.',
    size: '4.2 MB · ZIP'
  },
  {
    Icon: BookOpen,
    title: 'Brand guidelines',
    desc: 'Voice, palette, typography and logo-usage rules for the parent house.',
    size: '6.8 MB · PDF'
  },
  {
    Icon: FileText,
    title: 'Executive bios',
    desc: 'Short and long-form biographies of the leadership council, with portraits.',
    size: '2.1 MB · PDF'
  },
  {
    Icon: FileText,
    title: 'Sustainability Charter 2025',
    desc: 'The 28-page founding document with underlying baseline data.',
    size: '3.7 MB · PDF'
  },
  {
    Icon: ImageIcon,
    title: 'Editorial photography pack',
    desc: 'High-resolution atelier and product photography, with credits.',
    size: '184 MB · ZIP'
  },
  {
    Icon: BookOpen,
    title: 'Mayavé brand book',
    desc: 'House manifesto, voice and product portfolio for our first brand.',
    size: '5.4 MB · PDF'
  }
];

export default function PressKit() {
  return (
    <section id="press-kit" className="bg-offwhite">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
        <div className="grid gap-12 md:grid-cols-[40%_60%] md:gap-16">
          <Reveal>
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-electric">Press Kit</div>
              <h2 className="font-display mt-5 text-[clamp(2rem,3.4vw,3.4rem)] font-light leading-[1.1] tracking-[-0.014em] text-ink">
                For the press desk.
              </h2>
              <p className="mt-7 max-w-[420px] text-[15.5px] leading-[1.8] text-muted">
                Logos, brand guidelines, executive biographies, the Sustainability Charter and
                approved editorial photography. All assets are released under licence for editorial
                use; please credit Dholakia Retail Private Limited.
              </p>
              <a
                href="mailto:press@dholakiaretail.com"
                data-cursor="hover"
                className="mt-8 inline-flex items-center gap-3 border border-ink/20 px-5 py-3 text-[12px] uppercase tracking-[0.2em] text-ink transition-colors hover:border-electric hover:text-electric"
              >
                <Mail size={14} /> Press desk · press@dholakiaretail.com
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {ASSETS.map((a, i) => (
              <Reveal key={a.title} delay={(i % 4) * 0.04}>
                <a
                  href="#"
                  data-cursor="hover"
                  className="group flex h-full items-start gap-4 border border-ink/15 bg-white p-6 transition-colors hover:border-electric"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center border border-ink/15 text-muted transition-colors group-hover:border-electric group-hover:text-electric">
                    <a.Icon size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-[1.05rem] font-light leading-tight text-ink transition-colors group-hover:text-electric">
                      {a.title}
                    </div>
                    <div className="mt-2 text-[13px] leading-[1.6] text-muted">{a.desc}</div>
                    <div className="mt-3 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-electric">
                      <Download size={12} /> {a.size}
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
