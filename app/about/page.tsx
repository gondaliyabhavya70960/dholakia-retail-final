import PageHero from '@/components/sections/PageHero';
import EditorialBlock from '@/components/sections/EditorialBlock';
import PageCloser from '@/components/sections/PageCloser';
import GroupIdentity from '@/components/sections/group/GroupIdentity';
import GroupLeadership from '@/components/sections/group/GroupLeadership';
import GroupTimeline from '@/components/sections/group/GroupTimeline';

export const metadata = { title: 'The Group · Dholakia Retail' };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The Group"
        title={'A patient house,\nbuilt in stone.'}
        subtitle="Dholakia Retail Private Limited was incorporated in 2024 to steward a portfolio of luxury jewellery brands with the cadence of the world’s great maisons."
        imageSrc="/images/portrait-3.jpg"
      />
      <GroupIdentity />
      <EditorialBlock
        eyebrow="Philosophy"
        heading="Restraint is the strategy."
        paragraphs={[
          'We did not begin Dholakia Retail to compete with the volume players of Indian jewellery. We began it because we saw a different opportunity — to build the editorial maisons that India deserves, with the same patience that built Bulgari, the same conscience that defines Tiffany & Co., and the same Indian craftsmanship that has, for forty years, quietly supplied the world.',
          'The discipline begins with the room: a quiet office in the Surat Diamond Bourse where every stone is examined, every piece is photographed, every certificate is filed. From that room, our first house — Mayavé — was conceived. Three more are in development. None will ship before they are ready.',
          'We measure ourselves not by quarter but by decade. We do not chase trends. We do not chase scale. We invest in craft, in ethics, in time — and we let the work speak for itself.'
        ]}
        pullquote={{
          quote: 'A house of houses, with the patience of a magazine and the rigour of a maison.',
          attribution: 'Founding board, January 2024'
        }}
      />
      <GroupLeadership />
      <GroupTimeline />
      <PageCloser
        statement="A *parent house* writes the standards. The houses keep them."
        body="If you are considering a partnership, an investment, or a conversation about the future of Indian luxury — the door is open. We respond within two business days."
        primary={{ label: 'Begin a conversation', href: '/contact' }}
        secondary={{ label: 'Read the portfolio', href: '/portfolio' }}
      />
    </>
  );
}
