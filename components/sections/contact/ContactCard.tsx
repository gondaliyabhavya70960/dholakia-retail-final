'use client';
import Reveal from '@/components/motion/Reveal';

const ROWS = [
  ['Entity', 'Dholakia Retail Pvt. Ltd.'],
  ['CIN', 'U32111GJ2024PTC155690'],
  ['Registered office', 'Surat Diamond Bourse, Gujarat 395008, India'],
  ['Brand desk', 'hello@dholakiaretail.com'],
  ['Press desk', 'press@dholakiaretail.com']
];

export default function ContactCard() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[640px] px-6 py-24 md:py-32">
        <Reveal>
          <div className="border border-ink/15 bg-white p-10 shadow-[0_30px_80px_-30px_rgba(11,20,38,0.18)] md:p-14">
            <div className="border-l-4 border-electric pl-4">
              <div className="text-[11px] uppercase tracking-[0.22em] text-electric">Corporate</div>
              <h3 className="font-display mt-2 text-[clamp(1.6rem,2vw,2rem)] font-light text-ink">
                Dholakia Retail Pvt. Ltd.
              </h3>
            </div>
            <dl className="mt-10 divide-y divide-ink/10">
              {ROWS.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[40%_60%] gap-6 py-5 text-[14.5px]">
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-muted">{k}</dt>
                  <dd className="text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
