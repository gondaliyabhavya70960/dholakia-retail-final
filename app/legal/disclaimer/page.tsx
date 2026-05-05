import LegalMasthead from '@/components/sections/legal/LegalMasthead';
import LegalCloser from '@/components/sections/legal/LegalCloser';
import Reveal from '@/components/motion/Reveal';

export const metadata = { title: 'Disclaimer — Dholakia Retail' };

export default function Page() {
  return (
    <>
      <LegalMasthead
        eyebrow="Legal"
        title="Disclaimer."
        lastUpdated="01 Apr 2026"
        effective="15 Apr 2026"
        version="2.0"
      />
      <section className="bg-ivory">
        <div className="mx-auto max-w-[880px] px-6 pb-32 md:px-8 md:pb-40">
          <Reveal>
            <article className="border border-ink/15 bg-white p-10 md:p-14">
              <div className="space-y-7 text-[15.5px] leading-[1.85] text-ink/85">
                <p>
                  The content of dholakiaretail.com (the "Site") is published for general
                  information and corporate-communication purposes only. It is not, and is not
                  intended to be, a public offer, a solicitation, an investment recommendation,
                  legal advice, financial advice, or a guarantee of any kind.
                </p>
                <p>
                  All editorial content reflects the views of Dholakia Retail Private Limited at
                  the time of publication and may be revised, withdrawn or replaced without notice.
                  We make reasonable efforts to keep information current and correct, but we make
                  no representation or warranty, express or implied, regarding accuracy,
                  completeness, suitability or availability.
                </p>
                <p>
                  References to gemstones, materials, processes, certifications and bench-times
                  describe the standards we work to in our Surat atelier. Variations may exist for
                  bespoke commissions, archive pieces and pieces produced by partner workshops.
                </p>
                <p>
                  Where the Site quotes third-party data — including market sizings, sustainability
                  benchmarks, certification standards and editorial coverage — we credit the source
                  in good faith. We do not warrant the accuracy of third-party data and recommend
                  that you confirm any figure that is material to your own decision-making by going
                  back to its primary source.
                </p>
                <p>
                  Any reliance you place on the Site is strictly at your own risk. To the maximum
                  extent permitted by law, Dholakia Retail Private Limited and its directors,
                  officers, employees and affiliates accept no liability whatsoever for any loss or
                  damage — direct, indirect, incidental, consequential or otherwise — arising from
                  use of, or inability to use, the Site.
                </p>
                <p>
                  This Disclaimer is governed by the laws of India. The courts of Surat, Gujarat
                  have exclusive jurisdiction over any dispute arising out of, or in connection
                  with, it.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
      <LegalCloser
        statement="For questions about anything published on this Site, or to flag a correction, write to our Editorial Office at"
        email="editorial@dholakiaretail.com"
        signature="Office of the General Counsel · Dholakia Retail Private Limited"
      />
    </>
  );
}
