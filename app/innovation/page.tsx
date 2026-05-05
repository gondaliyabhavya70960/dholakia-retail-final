import PageHero from '@/components/sections/PageHero';
import EditorialBlock from '@/components/sections/EditorialBlock';
import PageCloser from '@/components/sections/PageCloser';
import InnovationLGD from '@/components/sections/innovation/InnovationLGD';
import InnovationCompare from '@/components/sections/innovation/InnovationCompare';

export const metadata = { title: 'Innovation · Dholakia Retail' };

export default function InnovationPage() {
  return (
    <>
      <PageHero
        eyebrow="Innovation"
        title={'Materials science,\non the bench.'}
        subtitle="Lab-grown diamonds. Recycled gold. Digital provenance ledgers. Innovation, for us, is in service of the oldest discipline — making things that last."
        imageSrc="/images/innovation-1.jpg"
      />
      <InnovationLGD />
      <EditorialBlock
        eyebrow="The Surat CVD chamber"
        heading="A diamond grown in a controlled chamber, in fourteen weeks, with measurable carbon."
        paragraphs={[
          'Chemical Vapour Deposition (CVD) is the process by which we grow our laboratory diamonds. A small natural-diamond seed is placed inside a sealed chamber. Carbon-rich gas is introduced, and a microwave plasma breaks the molecules apart so that single carbon atoms drift, layer by layer, onto the seed. Over fourteen weeks, the seed becomes a rough diamond — gemmologically identical to its mined counterpart, traceable to the watt-hour, and accountable in carbon.',
          'We did not invent CVD. What we have invested in is the integrity of our supply: every Mayavé lab-grown stone is grown by an SCS-007 certified partner, powered with renewable energy, audited for water and waste, and shipped with a watt-hour-level ledger that begins on day one of growth.'
        ]}
      />
      <InnovationCompare />
      <PageCloser
        statement="The most beautiful piece in the room. *Engineered to be the most ethical.*"
        body="If you are working on materials science, lab-grown standards, or post-mining provenance — we welcome the conversation. Our innovation desk replies the same week."
        primary={{ label: 'Begin a conversation', href: '/contact' }}
        secondary={{ label: 'Read the journal', href: '/news' }}
      />
    </>
  );
}
