'use client';
import Image from 'next/image';
import Reveal from '@/components/motion/Reveal';
import { useState } from 'react';

const CATS = ['All', 'Newsroom', 'Sustainability', 'Innovation', 'Mayavé', 'Press'];

const ARTICLES = [
  {
    image: '/images/news-1.jpg',
    cat: 'Newsroom',
    date: 'April 2026',
    title: 'Mayavé opens private viewing salon at Surat Diamond Bourse',
    excerpt: 'A 1,400-square-foot atelier and viewing space designed in collaboration with Studio Lotus.'
  },
  {
    image: '/images/news-2.jpg',
    cat: 'Sustainability',
    date: 'March 2026',
    title: 'Dholakia Retail joins SCS-007 ethical lab-grown diamond standard',
    excerpt: 'A first-of-its-kind commitment among Indian jewellery parent houses.'
  },
  {
    image: '/images/news-3.jpg',
    cat: 'Innovation',
    date: 'February 2026',
    title: 'Inside the Surat CVD chamber: a new chapter in clean diamond growing',
    excerpt: 'How a microwave plasma in Gujarat is shifting the carbon math of luxury.'
  },
  {
    image: '/images/news-4.jpg',
    cat: 'Mayavé',
    date: 'February 2026',
    title: 'Notes from the bench: how a stone becomes a piece',
    excerpt: 'Three months at the bench. One stone. Five hands. Zero compromise.'
  },
  {
    image: '/images/lookbook-2.jpg',
    cat: 'Press',
    date: 'January 2026',
    title: 'Dholakia Retail named to Vogue Business Asia’s “25 to watch” list',
    excerpt: 'Editorial coverage of the parent-house model in Indian luxury.'
  },
  {
    image: '/images/lookbook-5.jpg',
    cat: 'Newsroom',
    date: 'December 2025',
    title: 'Dholakia Retail publishes its 2025 Sustainability Charter',
    excerpt: 'A 28-page founding document covering Scope 1–3, traceability and audit cadence.'
  }
];

export default function NewsGrid() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? ARTICLES : ARTICLES.filter((a) => a.cat === filter);
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
        <Reveal>
          <div className="flex flex-wrap items-center gap-2 border-b border-ink/15 pb-3">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                data-cursor="hover"
                className={`px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition-colors ${
                  filter === c ? 'bg-electric text-white' : 'text-muted hover:text-ink'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
          {filtered.map((a, i) => (
            <Reveal key={i} delay={(i % 4) * 0.05}>
              <a href="#" data-cursor="hover" className="group block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="(min-width:768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
                  <span className="text-electric">{a.cat}</span>
                  <span className="h-px w-6 bg-ink/20" />
                  {a.date}
                </div>
                <h3 className="font-display mt-4 text-[clamp(1.5rem,2vw,2rem)] font-light leading-[1.18] text-ink transition-colors group-hover:text-electric">
                  {a.title}
                </h3>
                <p className="mt-3 max-w-[480px] text-[14.5px] leading-[1.8] text-muted">
                  {a.excerpt}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
