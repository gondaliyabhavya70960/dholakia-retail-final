import MayaveHero from '@/components/sections/mayave/MayaveHero';
import MayaveEssence from '@/components/sections/mayave/MayaveEssence';
import MayaveFacts from '@/components/sections/mayave/MayaveFacts';
import MayaveLookbook from '@/components/sections/mayave/MayaveLookbook';
import EmbeddedVideo from '@/components/sections/EmbeddedVideo';
import PageCloser from '@/components/sections/PageCloser';

export const metadata = { title: 'Mayavé · Dholakia Retail' };

export default function MayavePage() {
  return (
    <>
      <MayaveHero />
      <EmbeddedVideo
        src="https://www.tiktok.com/embed/v2/7362648947493440811"
        title="Mayavé — hero film"
        aspect="aspect-[9/16]"
        eyebrow="The hero film · No.01"
        caption="A vertical study — quiet hands, quiet light, the editorial language of Mayavé."
        sourceLabel="Watch on TikTok"
        sourceHref="https://www.tiktok.com/@mon.ete.studio/video/7362648947493440811"
        bg="ink"
        maxWidth="max-w-[520px]"
      />
      <MayaveEssence />
      <MayaveFacts />
      <MayaveLookbook />
      <EmbeddedVideo
        src="https://www.youtube-nocookie.com/embed/nrxNZFqt324?rel=0&modestbranding=1"
        title="Mayavé — the lookbook film"
        eyebrow="Lookbook film"
        caption="The 2026 Mayavé lookbook — a slow study of stones, of metals, of light."
        sourceLabel="Watch on YouTube"
        sourceHref="https://www.youtube.com/watch?v=nrxNZFqt324"
      />
      <PageCloser
        statement="A *private viewing.* By appointment only."
        body="Mayavé is shown in a salon at the Surat Diamond Bourse, in Mumbai by arrangement, and in select international cities each season. Private viewings begin with a conversation."
        primary={{ label: 'Request a viewing', href: '/contact' }}
        secondary={{ label: 'Read the journal', href: '/news' }}
      />
    </>
  );
}
