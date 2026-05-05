import MayaveHero from '@/components/sections/mayave/MayaveHero';
import MayaveEssence from '@/components/sections/mayave/MayaveEssence';
import MayaveFacts from '@/components/sections/mayave/MayaveFacts';
import MayaveLookbook from '@/components/sections/mayave/MayaveLookbook';
import PageCloser from '@/components/sections/PageCloser';

export const metadata = { title: 'Mayavé · Dholakia Retail' };

export default function MayavePage() {
  return (
    <>
      <MayaveHero />
      <MayaveEssence />
      <MayaveFacts />
      <MayaveLookbook />
      <PageCloser
        statement="A *private viewing.* By appointment only."
        body="Mayavé is shown in a salon at the Surat Diamond Bourse, in Mumbai by arrangement, and in select international cities each season. Private viewings begin with a conversation."
        primary={{ label: 'Request a viewing', href: '/contact' }}
        secondary={{ label: 'Read the journal', href: '/news' }}
      />
    </>
  );
}
