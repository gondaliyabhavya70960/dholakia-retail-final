'use client';
import { use, useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, ChevronDown, MapPin, Briefcase, Clock } from 'lucide-react';
import { careerRoles } from '@/lib/content';
import Reveal from '@/components/motion/Reveal';
import TiltImage from '@/components/motion/TiltImage';

const ACCORDION = [
  { key: 'about', title: 'About this role' },
  { key: 'responsibilities', title: 'What you’ll do' },
  { key: 'qualifications', title: 'What we’re looking for' },
  { key: 'process', title: 'Our process' }
];

const PROCESS_STEPS = [
  'A first conversation by video with our talent partner — about thirty minutes.',
  'A working session with the hiring manager and one peer — ninety minutes, on-site where possible.',
  'A final conversation with a member of the leadership council.',
  'A written offer, followed by a private studio visit before you decide.'
];

const BENEFITS = [
  'Private health cover for you and your dependents',
  'Sabbatical at year five and again at year ten',
  'Annual personal-development budget',
  'Profit-share for permanent staff',
  'Atelier discount on Mayavé pieces'
];

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const role = careerRoles.find((r) => r.slug === slug);
  if (!role) return notFound();
  const related = careerRoles.filter((r) => r.slug !== role.slug);
  const [open, setOpen] = useState<string>('about');

  return (
    <>
      {/* Hero — 60/40 with sticky apply card */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1480px] px-6 pb-20 pt-32 md:px-12 md:pb-24 md:pt-40">
          <Reveal>
            <Link
              href="/careers"
              data-cursor="hover"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted hover:text-electric"
            >
              <ArrowLeft size={13} /> All careers
            </Link>
          </Reveal>
          <div className="mt-12 grid gap-12 md:grid-cols-[60%_40%] md:gap-16">
            <Reveal>
              <div className="text-[11px] uppercase tracking-[0.22em] text-electric">{role.fn}</div>
              <h1 className="font-display mt-5 text-[clamp(2.4rem,4.6vw,4.8rem)] font-light leading-[1.05] tracking-[-0.014em] text-ink">
                {role.title}
              </h1>
              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-ink/15 pt-6 text-[12px] uppercase tracking-[0.18em] text-muted">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={13} className="text-electric" /> {role.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Briefcase size={13} className="text-electric" /> {role.type}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock size={13} className="text-electric" /> Open · rolling
                </span>
              </div>
            </Reveal>

            {/* Sticky apply card */}
            <Reveal delay={0.1}>
              <div className="md:sticky md:top-28">
                <div className="border border-ink/15 bg-white p-8 md:p-9">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-electric">
                    Apply for this role
                  </div>
                  <h2 className="font-display mt-4 text-[clamp(1.4rem,2vw,1.85rem)] font-light italic leading-[1.2] tracking-[-0.01em] text-ink">
                    A short, considered note is enough.
                  </h2>
                  <p className="mt-4 text-[14.5px] leading-[1.8] text-muted">
                    Send a CV, a portfolio link if relevant, and a short paragraph on why this role.
                    We read every application personally and reply within ten working days.
                  </p>
                  <a
                    href="#apply"
                    data-cursor="hover"
                    className="mt-7 inline-flex w-full items-center justify-between bg-electric px-6 py-4 text-[12px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-royal"
                  >
                    Begin application <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Accordion body */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[820px] px-6 pb-24 md:py-12">
          <Reveal>
            <div className="divide-y divide-ink/15 border-y border-ink/15">
              {ACCORDION.map((row) => (
                <div key={row.key}>
                  <button
                    onClick={() => setOpen(open === row.key ? '' : row.key)}
                    data-cursor="hover"
                    className="flex w-full items-center justify-between gap-6 py-7 text-left transition-colors hover:bg-bone/30"
                  >
                    <span className="font-display text-[clamp(1.4rem,2vw,1.85rem)] font-light leading-tight text-ink">
                      {row.title}
                    </span>
                    <motion.span
                      animate={{ rotate: open === row.key ? 180 : 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="text-electric"
                    >
                      <ChevronDown size={18} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open === row.key && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-9 pr-4 text-[15.5px] leading-[1.85] text-ink/85">
                          {row.key === 'about' && <p>{role.summary}</p>}
                          {row.key === 'responsibilities' && (
                            <ul className="space-y-3 border-l border-ink/15 pl-6">
                              {role.responsibilities.map((r, i) => (
                                <li key={i}>{r}</li>
                              ))}
                            </ul>
                          )}
                          {row.key === 'qualifications' && (
                            <ul className="space-y-3 border-l border-ink/15 pl-6">
                              {role.qualifications.map((q, i) => (
                                <li key={i}>{q}</li>
                              ))}
                            </ul>
                          )}
                          {row.key === 'process' && (
                            <ol className="space-y-3 border-l border-ink/15 pl-6">
                              {PROCESS_STEPS.map((p, i) => (
                                <li key={i}>
                                  <span className="text-electric">0{i + 1}.</span> {p}
                                </li>
                              ))}
                            </ol>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Manager portrait + team */}
      <section className="bg-offwhite">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
          <div className="grid gap-12 md:grid-cols-[44%_56%] md:items-center md:gap-16">
            <Reveal>
              <TiltImage
                src={role.manager.portrait}
                alt={role.manager.name}
                containerClassName="relative aspect-[4/5] w-full overflow-hidden bg-ink"
                maxAngle={4}
                scale={1.02}
              />
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-electric">
                  Who you’ll work with
                </div>
                <h3 className="font-display mt-5 text-[clamp(1.8rem,2.8vw,2.6rem)] font-light italic leading-[1.16] tracking-[-0.012em] text-ink">
                  “The bench is the loudest critic in the building. We hire for people who can
                  stand in front of it, listen, and answer.”
                </h3>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px w-12 bg-electric" />
                  <div className="text-[12px] uppercase tracking-[0.2em] text-muted">
                    {role.manager.name} · {role.manager.role}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Application form + benefits sidebar */}
      <section id="apply" className="bg-ivory">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
          <div className="grid gap-12 md:grid-cols-[60%_40%] md:gap-16">
            <Reveal>
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-electric">
                  Application
                </div>
                <h2 className="font-display mt-5 text-[clamp(1.8rem,3vw,2.8rem)] font-light leading-[1.14] tracking-[-0.012em] text-ink">
                  Tell us about yourself.
                </h2>
                <form className="mt-10 space-y-8">
                  {[
                    { l: 'Full name', t: 'text' },
                    { l: 'Email', t: 'email' },
                    { l: 'Phone (optional)', t: 'tel' },
                    { l: 'Portfolio or LinkedIn (optional)', t: 'url' }
                  ].map((f) => (
                    <label key={f.l} className="block">
                      <span className="text-[11px] uppercase tracking-[0.2em] text-muted">
                        {f.l}
                      </span>
                      <input
                        type={f.t}
                        className="mt-3 block w-full border-b border-ink/20 bg-transparent pb-3 text-[16px] text-ink outline-none transition-colors focus:border-electric"
                      />
                    </label>
                  ))}
                  <label className="block">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-muted">
                      Why this role
                    </span>
                    <textarea
                      rows={5}
                      className="mt-3 block w-full border-b border-ink/20 bg-transparent pb-3 text-[16px] text-ink outline-none transition-colors focus:border-electric"
                    />
                  </label>
                  <label className="block border border-dashed border-ink/30 p-8 text-center">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-electric">
                      Attach CV (PDF)
                    </span>
                    <div className="mt-2 text-[14px] text-muted">Drop here or click to browse</div>
                  </label>
                  <button
                    type="button"
                    data-cursor="hover"
                    className="inline-flex items-center gap-3 bg-electric px-8 py-4 text-[12px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-royal"
                  >
                    Submit application <ArrowUpRight size={14} />
                  </button>
                </form>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <aside className="md:sticky md:top-28">
                <div className="border border-ink/15 bg-white p-8 md:p-10">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-electric">
                    What you’ll have
                  </div>
                  <h3 className="font-display mt-4 text-[clamp(1.4rem,2vw,1.85rem)] font-light italic leading-[1.2] tracking-[-0.01em] text-ink">
                    Beyond the bench.
                  </h3>
                  <ul className="mt-7 space-y-4 border-t border-ink/15 pt-7">
                    {BENEFITS.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-[14.5px] leading-[1.7] text-ink/85"
                      >
                        <span className="mt-2 h-px w-4 shrink-0 bg-electric" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related roles */}
      {related.length > 0 && (
        <section className="bg-offwhite">
          <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
            <Reveal>
              <div className="text-[11px] uppercase tracking-[0.22em] text-electric">Related roles</div>
              <h2 className="font-display mt-5 text-[clamp(1.8rem,3vw,2.8rem)] font-light leading-[1.14] tracking-[-0.012em] text-ink">
                Other ways to join.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={0.05 + i * 0.05}>
                  <Link
                    href={`/careers/${r.slug}`}
                    data-cursor="hover"
                    className="group block border border-ink/15 bg-white p-8 transition-colors hover:border-electric md:p-10"
                  >
                    <div className="text-[11px] uppercase tracking-[0.22em] text-electric">
                      {r.fn}
                    </div>
                    <h3 className="font-display mt-4 text-[clamp(1.4rem,2vw,1.85rem)] font-light leading-[1.2] text-ink transition-colors group-hover:text-electric">
                      {r.title}
                    </h3>
                    <div className="mt-5 flex items-center gap-4 text-[12px] uppercase tracking-[0.18em] text-muted">
                      <span>{r.location}</span>
                      <span className="h-3 w-px bg-ink/20" />
                      <span>{r.type}</span>
                    </div>
                    <div className="mt-7 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-electric">
                      View role <ArrowUpRight size={13} />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
