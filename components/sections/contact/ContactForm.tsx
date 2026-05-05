'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    org: '',
    type: 'partnership',
    message: ''
  });
  const [sent, setSent] = useState(false);

  function update<K extends keyof typeof form>(k: K, v: (typeof form)[K]) {
    setForm((s) => ({ ...s, [k]: v }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // Static demo — confirmation only.
    setSent(true);
  }

  return (
    <section id="form" className="bg-bone/30">
      <div className="mx-auto max-w-[1080px] px-6 py-24 md:px-12 md:py-32">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.22em] text-electric">
            Send us a note
          </div>
          <h2 className="font-display mt-5 text-[clamp(2rem,3vw,3rem)] font-light leading-[1.1] tracking-[-0.012em] text-ink">
            We read every message — and reply by hand.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-[55%_45%] md:gap-16">
          <Reveal>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-start gap-5 border border-electric/40 bg-white p-10"
                >
                  <CheckCircle2 size={48} className="text-electric" />
                  <h3 className="font-display text-2xl font-light italic">Thank you.</h3>
                  <p className="text-[15px] leading-[1.7] text-muted">
                    Your message has reached the right desk. You will hear back within two
                    business days.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={submit}
                  className="grid gap-6"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <Field label="Full name" value={form.name} onChange={(v) => update('name', v)} required />
                  <Field label="Email" type="email" value={form.email} onChange={(v) => update('email', v)} required />
                  <Field label="Organisation" value={form.org} onChange={(v) => update('org', v)} />
                  <div>
                    <label className="text-[11px] uppercase tracking-[0.22em] text-muted">
                      Inquiry type
                    </label>
                    <select
                      value={form.type}
                      onChange={(e) => update('type', e.target.value)}
                      data-cursor="hover"
                      className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-[15px] focus:border-electric focus:outline-none"
                    >
                      <option value="partnership">Partnership</option>
                      <option value="investor">Investor relations</option>
                      <option value="press">Press &amp; media</option>
                      <option value="careers">Careers</option>
                      <option value="brand">Brand &amp; bespoke</option>
                      <option value="general">General</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-[0.22em] text-muted">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-[15px] focus:border-electric focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    data-cursor="hover"
                    className="group mt-4 inline-flex w-fit items-center gap-3 bg-electric px-7 py-4 text-[12px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-royal"
                  >
                    Send message
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="border border-ink/15 bg-white p-8">
              <div className="text-[11px] uppercase tracking-[0.22em] text-electric">Preview</div>
              <p className="mt-4 text-[12px] uppercase tracking-[0.18em] text-muted">
                What we will receive
              </p>
              <dl className="mt-6 space-y-4 text-[14.5px]">
                <Row k="From" v={form.name || '—'} />
                <Row k="Email" v={form.email || '—'} />
                <Row k="Organisation" v={form.org || '—'} />
                <Row k="Routing" v={form.type} />
              </dl>
              <div className="mt-7 border-t border-ink/10 pt-6 text-[13.5px] leading-[1.7] text-ink/80">
                {form.message || (
                  <span className="italic text-muted">Your message will appear here as you write.</span>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type = 'text',
  value,
  onChange,
  required
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.22em] text-muted">{label}</label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-[15px] focus:border-electric focus:outline-none"
      />
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-[35%_65%] gap-3">
      <dt className="text-[11px] uppercase tracking-[0.22em] text-muted">{k}</dt>
      <dd className="truncate text-ink">{v}</dd>
    </div>
  );
}
