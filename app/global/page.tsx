import PageHero from '@/components/sections/PageHero';
import EditorialBlock from '@/components/sections/EditorialBlock';
import PageCloser from '@/components/sections/PageCloser';
import GlobalFootprint from '@/components/sections/global/GlobalFootprint';

export const metadata = { title: 'Global Presence · Dholakia Retail' };

export default function GlobalPage() {
  return (
    <>
      <PageHero
        eyebrow="Global presence"
        title={'Surat. Mumbai. World.'}
        subtitle="A focused footprint — three locations, three roles. We do not open salons. We open conversations."
        imageSrc="/images/optB-global-hero.jpg"
        variant="fullbleed"
      />
      <GlobalFootprint />
      <EditorialBlock
        eyebrow="Partnerships"
        heading="A patient, partnership-led approach to international markets."
        paragraphs={[
          'Dholakia Retail does not operate retail stores. Mayavé is shown by appointment, in private salons, in select international cities each season — typically Dubai, London, Geneva, Singapore and New York. Each viewing is curated for a small group of clients, journalists, or partners; each is documented for the archive.',
          'Our strategic partnerships span auction houses, RJC chapters, Kimberley Process secretariats, museums, and a small group of family-office advisors who introduce us to the collectors who care about the things we care about.',
          'Bench-trained generalists are not what wins international audiences. Editorial discipline is. Every Mayavé conversation overseas is led by an Indian voice — Indian craft, Indian conscience, Indian time.'
        ]}
        pullquote={{
          quote: 'We do not open salons. We open conversations.',
          attribution: 'Director, Houses & Brand'
        }}
      />
      <PageCloser
        statement="The next *salon* may be your city."
        body="If you are an auction-house specialist, museum curator, journalist, or family-office advisor and would like to host a viewing — we are listening."
        primary={{ label: 'Begin a conversation', href: '/contact' }}
        secondary={{ label: 'See the houses', href: '/portfolio' }}
      />
    </>
  );
}
