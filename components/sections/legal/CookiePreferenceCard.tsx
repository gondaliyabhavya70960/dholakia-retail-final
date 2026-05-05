'use client';
import { useState } from 'react';
import Reveal from '@/components/motion/Reveal';

const PREFS = [
  {
    key: 'essential',
    name: 'Essential',
    desc: 'Required for the Site to function. Cannot be turned off.',
    locked: true
  },
  {
    key: 'analytics',
    name: 'Analytics',
    desc: 'Privacy-respecting, aggregated metrics to help us improve the Site.'
  },
  {
    key: 'preferences',
    name: 'Preferences',
    desc: 'Remembers small choices, like your last visited page in our Newsroom.'
  }
];

export default function CookiePreferenceCard() {
  const [state, setState] = useState<Record<string, boolean>>({
    essential: true,
    analytics: true,
    preferences: true
  });
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[880px] px-6 pb-20 md:px-8">
        <Reveal>
          <div className="border border-ink/15 bg-white p-8 md:p-10">
            <div className="text-[11px] uppercase tracking-[0.22em] text-electric">
              Manage your cookies
            </div>
            <h3 className="font-display mt-4 text-[clamp(1.5rem,2.4vw,2rem)] font-light italic leading-[1.2] tracking-[-0.01em] text-ink">
              Your preferences, your call.
            </h3>
            <div className="mt-8 divide-y divide-ink/15 border-y border-ink/15">
              {PREFS.map((p) => (
                <div
                  key={p.key}
                  className="grid grid-cols-[1fr_auto] items-start gap-6 py-5 md:items-center"
                >
                  <div>
                    <div className="text-[14px] font-medium tracking-[0.02em] text-ink">{p.name}</div>
                    <div className="mt-1 max-w-[520px] text-[13.5px] leading-[1.7] text-muted">
                      {p.desc}
                    </div>
                  </div>
                  <button
                    disabled={p.locked}
                    onClick={() => setState((s) => ({ ...s, [p.key]: !s[p.key] }))}
                    data-cursor={p.locked ? undefined : 'hover'}
                    className={`relative h-6 w-11 rounded-full border transition-colors ${
                      state[p.key]
                        ? 'border-electric bg-electric'
                        : 'border-ink/30 bg-white'
                    } ${p.locked ? 'opacity-50' : ''}`}
                    aria-pressed={state[p.key]}
                    aria-label={`Toggle ${p.name}`}
                  >
                    <span
                      className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${
                        state[p.key] ? 'left-[22px]' : 'left-0.5'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                data-cursor="hover"
                className="bg-electric px-6 py-3 text-[12px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-royal"
              >
                Save preferences
              </button>
              <button
                data-cursor="hover"
                onClick={() =>
                  setState({ essential: true, analytics: false, preferences: false })
                }
                className="text-[12px] uppercase tracking-[0.18em] text-muted hover:text-ink"
              >
                Reject non-essential
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
