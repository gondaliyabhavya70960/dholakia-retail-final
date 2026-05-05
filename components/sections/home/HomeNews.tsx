'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';
import TiltImage from '@/components/motion/TiltImage';

const NEWS = [
  {
    image: '/images/news-1.jpg',
    cat: 'Newsroom',
    date: 'April 2026',
    title: 'Mayavé opens private viewing salon at Surat Diamond Bourse',
    excerpt:
      'A 1,400-square-foot atelier and viewing space designed in collaboration with Studio Lotus — by-appointment only.'
  },
  {
    image: '/images/news-2.jpg',
    cat: 'Sustainability',
    date: 'March 2026',
    title: 'Dholakia Retail joins SCS-007 ethical lab-grown diamond standard'
  },
  {
    image: '/images/news-3.jpg',
    cat: 'Innovation',
    date: 'February 2026',
    title: 'Inside the Surat CVD chamber: a new chapter in clean diamond growing'
  }
];

export default function HomeNews() {
  const [feat, ...rest] = NEWS;
  return (
    <section className="bg-bone/30">
      <div className="mx-auto max-w-[1280px] px-6 py-28 md:px-12 md:py-36">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-electric">
                Newsroom
              </div>
              <h2 className="font-display mt-5 text-[clamp(2rem,3.2vw,3.2rem)] font-light leading-[1.1] tracking-[-0.01em] text-ink">
                Recent dispatches
              </h2>
            </div>
            <Link
              href="/news"
              data-cursor="hover"
              className="group hidden items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-ink hover:text-electric md:inline-flex"
            >
              View all news
              <ArrowRight
                size={13}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-[60%_40%] md:gap-12">
          {/* Featured */}
          <Reveal>
            <Link href="/news" data-cursor="hover" className="group block">
              <TiltImage
                src={feat.image}
                alt={feat.title}
                containerClassName="aspect-[16/10] w-full"
                maxAngle={2}
                scale={1.04}
              />
              <div className="mt-7 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
                <span className="text-electric">{feat.cat}</span>
                <span className="h-px w-6 bg-ink/20" />
                {feat.date}
              </div>
              <h3 className="font-display mt-5 max-w-[640px] text-[clamp(1.6rem,2.4vw,2.6rem)] font-light leading-[1.15] text-ink transition-colors group-hover:text-electric">
                {feat.title}
              </h3>
              {feat.excerpt && (
                <p className="mt-4 max-w-[560px] text-[15px] leading-[1.8] text-muted">
                  {feat.excerpt}
                </p>
              )}
            </Link>
          </Reveal>

          {/* List */}
          <div className="flex flex-col divide-y divide-ink/10">
            {rest.map((n, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <Link
                  href="/news"
                  data-cursor="hover"
                  className="group flex gap-5 py-7 first:pt-0 last:pb-0"
                >
                  <div className="relative aspect-[16/10] w-[44%] shrink-0 overflow-hidden">
                    <Image
                      src={n.image}
                      alt={n.title}
                      fill
                      sizes="240px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-muted">
                      <span className="text-electric">{n.cat}</span>·{n.date}
                    </div>
                    <h4 className="font-display mt-2 text-[18px] font-light leading-[1.25] text-ink transition-colors group-hover:text-electric md:text-[20px]">
                      {n.title}
                    </h4>
                  </div>
                </Link>
              </Reveal>
            ))}
            <Link
              href="/news"
              className="mt-6 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-electric md:hidden"
            >
              View all news <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
