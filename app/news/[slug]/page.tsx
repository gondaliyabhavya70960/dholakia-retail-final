import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight, Linkedin, Twitter, Link2 } from 'lucide-react';
import { newsArticles } from '@/lib/content';
import Reveal from '@/components/motion/Reveal';
import MouseParallax from '@/components/motion/MouseParallax';

export function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const a = newsArticles.find((x) => x.slug === params.slug);
  return { title: a ? `${a.title} — Dholakia Retail` : 'Dholakia Retail' };
}

export default function Page({ params }: { params: { slug: string } }) {
  const article = newsArticles.find((a) => a.slug === params.slug);
  if (!article) return notFound();
  const others = newsArticles.filter((a) => a.slug !== article.slug).slice(0, 3);
  const featured = others[0];
  const list = others.slice(1);
  const body = article.body ?? [article.excerpt];

  return (
    <>
      {/* Hero — magazine cover: 30vh slab + 70vh image */}
      <section className="bg-ivory">
        <div className="relative grid min-h-[30vh] place-items-end px-6 pb-12 pt-32 md:px-12 md:pb-16 md:pt-40">
          <div className="mx-auto w-full max-w-[1280px]">
            <Reveal>
              <Link
                href="/news"
                data-cursor="hover"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted hover:text-electric"
              >
                <ArrowLeft size={13} /> Newsroom
              </Link>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mt-10 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
                <span className="text-electric">{article.cat}</span>
                <span className="h-px w-8 bg-ink/20" />
                <span>{article.date}</span>
              </div>
              <h1 className="font-display mt-5 max-w-[1100px] text-[clamp(2.4rem,5vw,5.4rem)] font-light leading-[1.05] tracking-[-0.014em] text-ink">
                {article.title}
              </h1>
              <p className="mt-7 max-w-[680px] text-[17px] leading-[1.6] text-muted">
                {article.excerpt}
              </p>
            </Reveal>
          </div>
        </div>
        <div className="h-px w-full bg-ink/15" />
      </section>

      <section className="relative bg-ink">
        <div className="relative h-[70vh] w-full overflow-hidden">
          <MouseParallax strength={20} className="h-full w-full">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </MouseParallax>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
        </div>
      </section>

      {/* Body — 720px column with drop-cap */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[720px] px-6 pb-20 pt-24 md:px-0 md:pt-32">
          <Reveal>
            <div className="flex items-center gap-4 border-b border-ink/15 pb-6 text-[11px] uppercase tracking-[0.22em] text-muted">
              <span>By {article.author ?? 'Editorial Desk'}</span>
              <span className="h-3 w-px bg-ink/20" />
              <span>{article.date}</span>
            </div>
          </Reveal>
          <article className="mt-12 space-y-7 text-[19px] leading-[1.8] font-light text-ink/90">
            {body.map((p, i) => (
              <Reveal key={i} delay={Math.min(i * 0.04, 0.16)}>
                {i === 0 ? (
                  <p>
                    <span className="font-display float-left mr-3 mt-1 text-[6rem] font-light italic leading-[0.85] text-electric">
                      {p[0]}
                    </span>
                    {p.slice(1)}
                  </p>
                ) : (
                  <p>{p}</p>
                )}
              </Reveal>
            ))}
          </article>

          {/* Share strip */}
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

      {/* Related — featured-plus-list 50/50 */}
      <section className="bg-offwhite">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.22em] text-electric">More from the newsroom</div>
            <h2 className="font-display mt-5 max-w-[820px] text-[clamp(1.8rem,3vw,2.8rem)] font-light leading-[1.12] tracking-[-0.012em] text-ink">
              Continue reading.
            </h2>
          </Reveal>
          {featured && (
            <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
              <Reveal>
                <Link href={`/news/${featured.slug}`} data-cursor="hover" className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      sizes="(min-width:768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
                    <span className="text-electric">{featured.cat}</span>
                    <span className="h-px w-6 bg-ink/20" />
                    {featured.date}
                  </div>
                  <h3 className="font-display mt-4 text-[clamp(1.6rem,2.4vw,2.4rem)] font-light leading-[1.16] text-ink transition-colors group-hover:text-electric">
                    {featured.title}
                  </h3>
                </Link>
              </Reveal>
              <div className="space-y-12">
                {list.map((a, i) => (
                  <Reveal key={a.slug} delay={0.05 + i * 0.05}>
                    <Link
                      href={`/news/${a.slug}`}
                      data-cursor="hover"
                      className="group block border-t border-ink/15 pt-8"
                    >
                      <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
                        <span className="text-electric">{a.cat}</span>
                        <span className="h-px w-6 bg-ink/20" />
                        {a.date}
                      </div>
                      <h3 className="font-display mt-3 text-[clamp(1.4rem,2vw,2rem)] font-light leading-[1.18] text-ink transition-colors group-hover:text-electric">
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
          )}
        </div>
      </section>

      {/* Closer — two-column 50/50 */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
          <div className="relative grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <div className="absolute left-1/2 top-0 hidden h-full w-px bg-electric md:block" />
            <Reveal>
              <h3 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-light italic leading-[1.16] tracking-[-0.012em] text-ink">
                Have a story we should hear?
              </h3>
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <p className="max-w-[420px] text-[15.5px] leading-[1.8] text-muted">
                  Our editorial desk reads every email. If you’re working on a story about the
                  parent-house model in luxury, the future of bench craftsmanship, or India’s place
                  in clean diamond growing, we’d like to talk.
                </p>
                <Link
                  href="/contact"
                  data-cursor="hover"
                  className="mt-7 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-electric"
                >
                  Write to editorial <ArrowUpRight size={13} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
