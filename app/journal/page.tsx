'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { journalPosts } from '@/lib/content';
import Reveal from '@/components/motion/Reveal';
import MouseParallax from '@/components/motion/MouseParallax';

const CATS = ['All', 'Editorial', 'Atelier', 'Materials'];

export default function Page() {
  const [filter, setFilter] = useState('All');
  const featured = journalPosts[0];
  const rest = journalPosts.slice(1);
  const filtered = filter === 'All' ? rest : rest.filter((p) => p.category === filter);

  return (
    <>
      {/* Typographic-first hero with banner image */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1280px] px-6 pb-12 pt-32 md:px-12 md:pb-16 md:pt-44">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.22em] text-electric">The Journal</div>
            <h1 className="font-display mt-7 max-w-[1080px] text-[clamp(3rem,7vw,8rem)] font-light leading-[0.98] tracking-[-0.018em] text-ink">
              Long-form, slow-read
              <span className="block italic text-electric">notes from the house.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-10 max-w-[640px] text-[17px] leading-[1.6] text-muted">
              Editorial essays, atelier letters and working notes from the people who build, set,
              audit and write about the work of Dholakia Retail. Updated when something is worth
              saying — never on a schedule.
            </p>
          </Reveal>
        </div>
        <div className="mx-auto max-w-[1480px] px-6 md:px-12">
          <div className="relative h-[44vh] min-h-[320px] w-full overflow-hidden">
            <Image
              src="/images/journal-banner.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/15 to-transparent" />
          </div>
        </div>
        <div className="h-16 md:h-24" />
      </section>

      {/* Full-bleed featured post */}
      <section className="bg-ink">
        <Link
          href={`/journal/${featured.slug}`}
          data-cursor="hover"
          className="group block"
        >
          <div className="relative h-[80vh] w-full overflow-hidden">
            <MouseParallax strength={20} className="h-full w-full">
              <Image
                src={featured.cover}
                alt={featured.title}
                fill
                priority
                sizes="100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </MouseParallax>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 px-6 pb-16 md:px-12 md:pb-20">
              <div className="mx-auto max-w-[1280px]">
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/70">
                  Featured · {featured.category}
                </div>
                <h2 className="font-display mt-5 max-w-[900px] text-[clamp(2rem,4vw,4.4rem)] font-light leading-[1.06] tracking-[-0.012em] text-white">
                  {featured.title}
                </h2>
                <div className="mt-6 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-white/80 transition-colors group-hover:text-white">
                  Read essay <ArrowUpRight size={13} />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Sticky category sidebar + asymmetric grid */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
          <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-16">
            <aside className="md:sticky md:top-28 md:self-start">
              <div className="text-[11px] uppercase tracking-[0.22em] text-electric">
                Categories
              </div>
              <ul className="mt-6 space-y-3 border-l border-ink/15 pl-4">
                {CATS.map((c) => (
                  <li key={c}>
                    <button
                      onClick={() => setFilter(c)}
                      data-cursor="hover"
                      className={`block text-left text-[13px] uppercase tracking-[0.2em] transition-colors ${
                        filter === c ? 'text-electric' : 'text-muted hover:text-ink'
                      }`}
                    >
                      {c}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-20">
              {filtered.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 4) * 0.05}>
                  <Link
                    href={`/journal/${p.slug}`}
                    data-cursor="hover"
                    className={`group block ${i === 0 ? 'md:col-span-2' : ''}`}
                  >
                    <div
                      className={`relative overflow-hidden bg-ink ${
                        i === 0 ? 'aspect-[16/9]' : 'aspect-[4/5]'
                      }`}
                    >
                      <Image
                        src={p.cover}
                        alt={p.title}
                        fill
                        sizes={i === 0 ? '100vw' : '(min-width:768px) 50vw, 100vw'}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
                      <span className="text-electric">{p.category}</span>
                      <span className="h-px w-6 bg-ink/20" />
                      {p.date}
                      <span className="h-px w-6 bg-ink/20" />
                      {p.readTime}
                    </div>
                    <h3
                      className={`font-display mt-4 font-light leading-[1.16] text-ink transition-colors group-hover:text-electric ${
                        i === 0
                          ? 'text-[clamp(1.8rem,3vw,2.8rem)]'
                          : 'text-[clamp(1.4rem,2vw,2rem)]'
                      }`}
                    >
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-[520px] text-[14.5px] leading-[1.8] text-muted">
                      {p.dek}
                    </p>
                  </Link>
                </Reveal>
              ))}
              {filtered.length === 0 && (
                <div className="text-[14px] text-muted">No essays in this category yet.</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Inline subscribe pull-quote */}
      <section className="bg-offwhite">
        <div className="mx-auto max-w-[920px] px-6 py-24 text-center md:px-12 md:py-32">
          <Reveal>
            <p className="font-display text-[clamp(1.6rem,2.8vw,2.6rem)] font-light italic leading-[1.3] tracking-[-0.012em] text-ink">
              Receive the Journal in your inbox the morning each new essay is published — never
              more often.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <form className="mx-auto mt-10 flex max-w-[480px] items-center gap-3 border-b border-ink/20 pb-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent py-2 text-[15px] text-ink outline-none placeholder:text-muted"
              />
              <button
                type="button"
                data-cursor="hover"
                className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-electric"
              >
                Subscribe <ArrowUpRight size={13} />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
