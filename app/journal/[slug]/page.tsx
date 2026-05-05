import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight, Linkedin, Twitter, Link2 } from 'lucide-react';
import { journalPosts } from '@/lib/content';
import Reveal from '@/components/motion/Reveal';

export function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = journalPosts.find((x) => x.slug === params.slug);
  return { title: p ? `${p.title} — Dholakia Retail Journal` : 'Dholakia Retail' };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = journalPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();
  const related = journalPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      {/* Typography-only hero — 60vh */}
      <section className="bg-ivory">
        <div className="mx-auto flex min-h-[60vh] max-w-[1080px] flex-col justify-end px-6 pb-16 pt-32 md:px-12 md:pb-24 md:pt-40">
          <Reveal>
            <Link
              href="/journal"
              data-cursor="hover"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted hover:text-electric"
            >
              <ArrowLeft size={13} /> The Journal
            </Link>
            <div className="mt-12 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
              <span className="text-electric">{post.category}</span>
              <span className="h-px w-8 bg-ink/20" />
              <span>{post.date}</span>
              <span className="h-px w-8 bg-ink/20" />
              <span>{post.readTime}</span>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="font-display mt-8 max-w-[1000px] text-[clamp(2.6rem,5.2vw,5.8rem)] font-light italic leading-[1.04] tracking-[-0.014em] text-ink">
              {post.title}
            </h1>
            <p className="mt-7 max-w-[680px] text-[18px] leading-[1.6] text-muted">{post.dek}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-12 flex items-center gap-5 border-t border-ink/15 pt-7">
              <div className="relative h-14 w-14 overflow-hidden rounded-full bg-ink">
                <Image
                  src={post.author.portrait}
                  alt={post.author.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-[14px] font-medium text-ink">{post.author.name}</div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-muted">
                  {post.author.role}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Magazine-essay body — 720px column */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[720px] px-6 pb-20 md:px-0">
          <article className="space-y-7 text-[19px] leading-[1.8] font-light text-ink/90">
            {post.body.map((p, i) => (
              <Reveal key={i} delay={Math.min(i * 0.04, 0.16)}>
                {i === 0 ? (
                  <p>
                    <span className="font-display float-left mr-3 mt-1 text-[6rem] font-light italic leading-[0.85] text-electric">
                      {p[0]}
                    </span>
                    {p.slice(1)}
                  </p>
                ) : i === 1 ? (
                  <blockquote className="-mx-2 border-l-2 border-electric pl-7 md:-mx-20">
                    <p className="font-display text-[clamp(1.6rem,2.4vw,2.2rem)] font-light italic leading-[1.32] text-ink">
                      {p}
                    </p>
                  </blockquote>
                ) : (
                  <p>{p}</p>
                )}
              </Reveal>
            ))}
          </article>

          {/* Share */}
          <Reveal delay={0.1}>
            <div className="mt-14 flex flex-wrap items-center gap-6 border-t border-ink/15 pt-8">
              <div className="text-[11px] uppercase tracking-[0.22em] text-muted">Share</div>
              <div className="flex gap-3">
                {[
                  { Icon: Linkedin, label: 'LinkedIn' },
                  { Icon: Twitter, label: 'X' },
                  { Icon: Link2, label: 'Copy link' }
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    data-cursor="hover"
                    className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-muted transition-all hover:border-electric hover:text-electric"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Expanded author card */}
      <section className="bg-offwhite">
        <div className="mx-auto max-w-[1080px] px-6 py-20 md:px-12 md:py-28">
          <Reveal>
            <div className="grid gap-10 border border-ink/15 bg-white p-8 md:grid-cols-[180px_1fr] md:gap-12 md:p-12">
              <div className="relative aspect-square w-[180px] overflow-hidden bg-ink">
                <Image
                  src={post.author.portrait}
                  alt={post.author.name}
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-electric">
                  About the author
                </div>
                <h3 className="font-display mt-4 text-[clamp(1.6rem,2.4vw,2.2rem)] font-light italic leading-[1.18] tracking-[-0.012em] text-ink">
                  {post.author.name}
                </h3>
                <div className="mt-2 text-[12px] uppercase tracking-[0.2em] text-muted">
                  {post.author.role}
                </div>
                <p className="mt-6 max-w-[640px] text-[15.5px] leading-[1.85] text-ink/85">
                  {post.author.name} writes occasional notes for the Journal alongside their
                  full-time work at Dholakia Retail. Their essays here are personal — not corporate
                  communication — and reflect the slow, hand-thought way of working we value across
                  the house.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.22em] text-electric">More essays</div>
            <h2 className="font-display mt-5 max-w-[820px] text-[clamp(1.8rem,3vw,2.8rem)] font-light leading-[1.14] tracking-[-0.012em] text-ink">
              Stay in the Journal.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={0.05 + i * 0.05}>
                <Link href={`/journal/${p.slug}`} data-cursor="hover" className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                    <Image
                      src={p.cover}
                      alt={p.title}
                      fill
                      sizes="(min-width:768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
                    <span className="text-electric">{p.category}</span>
                    <span className="h-px w-6 bg-ink/20" />
                    {p.date}
                  </div>
                  <h3 className="font-display mt-4 text-[clamp(1.5rem,2.2vw,2.2rem)] font-light leading-[1.16] text-ink transition-colors group-hover:text-electric">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-[480px] text-[14.5px] leading-[1.8] text-muted">{p.dek}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter closer */}
      <section className="bg-offwhite">
        <div className="mx-auto max-w-[920px] px-6 py-24 text-center md:px-12 md:py-32">
          <Reveal>
            <p className="font-display text-[clamp(1.6rem,2.8vw,2.6rem)] font-light italic leading-[1.3] tracking-[-0.012em] text-ink">
              Subscribe to receive new essays the morning they’re published — never more often.
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
