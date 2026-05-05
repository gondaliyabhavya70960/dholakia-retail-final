'use client';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/motion/Reveal';
import { useState } from 'react';
import { newsArticles } from '@/lib/content';

const CATS = ['All', 'Newsroom', 'Sustainability', 'Innovation', 'Mayavé', 'Press'];

export default function NewsGrid() {
  const [filter, setFilter] = useState('All');
  const filtered =
    filter === 'All' ? newsArticles : newsArticles.filter((a) => a.cat === filter);
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
            <Reveal key={a.slug} delay={(i % 4) * 0.05}>
              <Link href={`/news/${a.slug}`} data-cursor="hover" className="group block">
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
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
