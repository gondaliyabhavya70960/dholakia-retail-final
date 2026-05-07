import PageHero from '@/components/sections/PageHero';
import EditorialBlock from '@/components/sections/EditorialBlock';
import PageCloser from '@/components/sections/PageCloser';
import CraftPhilosophy from '@/components/sections/craft/CraftPhilosophy';
import CraftProcess from '@/components/sections/craft/CraftProcess';
import CraftEcosystem from '@/components/sections/craft/CraftEcosystem';
import EmbeddedVideo from '@/components/sections/EmbeddedVideo';

export const metadata = { title: 'Craftsmanship · Dholakia Retail' };

export default function CraftPage() {
  return (
    <>
      <PageHero
        eyebrow="Craftsmanship"
        title={'The bench, the loupe,\nthe forty years.'}
        subtitle="Forty years on the bench have taught us a single discipline — that a piece is finished only when nothing more can be quietly removed."
        imageSrc="/images/atelier-hands-2.jpg"
      />
      <CraftPhilosophy />
      <CraftEcosystem />
      <EmbeddedVideo
        src="https://www.youtube-nocookie.com/embed/0dkGGeiMs1I?rel=0&modestbranding=1"
        title="The making ecosystem — Surat"
        eyebrow="Inside the making ecosystem"
        caption="A documentary look at the Surat partner network — bench, bourse, and the patient hands behind every Mayavé piece."
        sourceLabel="Watch on YouTube"
        sourceHref="https://www.youtube.com/watch?v=0dkGGeiMs1I"
        bg="offwhite"
      />
      <CraftProcess />
      <EditorialBlock
        eyebrow="A note from the bench"
        heading="Our craftsmen do not chase the latest tool. They chase the next thousandth of a millimetre."
        paragraphs={[
          'Every Mayavé piece passes through the hands of one master jeweller, from initial wax to final polish. We do not assembly-line. We do not subdivide. We believe the piece carries the maker’s rhythm into every facet — and that rhythm is what separates fine jewellery from fine merchandise.',
          'We invest in apprenticeship. The Surat atelier runs a four-year programme — selected each year from family-trade cousins, GIA Mumbai graduates, and bench graduates from across India — that covers metalwork, stone-setting, restoration, and the editorial reasoning behind each.'
        ]}
      />
      <PageCloser
        statement="The bench keeps *its own time.*"
        body="If you would like to commission a piece, partner on a craft programme, or visit the atelier — we welcome the conversation. Visits are by appointment."
        primary={{ label: 'Begin a conversation', href: '/contact' }}
        secondary={{ label: 'See the houses', href: '/portfolio' }}
      />
    </>
  );
}
