import PageHero from '@/components/sections/PageHero';
import PageCloser from '@/components/sections/PageCloser';
import PortfolioMayaveFeature from '@/components/sections/portfolio/PortfolioMayaveFeature';
import PortfolioFuture from '@/components/sections/portfolio/PortfolioFuture';
import EmbeddedVideo from '@/components/sections/EmbeddedVideo';

export const metadata = { title: 'Portfolio · Dholakia Retail' };

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={'A house of houses.'}
        subtitle="One flagship in market. Three on the horizon. Each conceived independently, built with shared discipline, and stewarded by Dholakia Retail."
        imageSrc="/images/optB-portfolio-hero.jpg"
        variant="fullbleed"
      />
      <PortfolioMayaveFeature />
      <EmbeddedVideo
        src="https://www.instagram.com/reel/DXZXTlTEdjo/embed"
        title="Mayavé — from the atelier"
        aspect="aspect-[9/16]"
        eyebrow="From the atelier"
        caption="A short film from the Mayavé atelier — the rhythm of bench, loupe and light."
        sourceLabel="Watch on Instagram"
        sourceHref="https://www.instagram.com/reel/DXZXTlTEdjo/"
        bg="offwhite"
        maxWidth="max-w-[520px]"
      />
      <PortfolioFuture />
      <PageCloser
        statement="The slow architecture of *editorial maisons.*"
        body="If you would like to know more about a house in development, partner on a future territory, or visit Mayavé in Surat — please be in touch."
        primary={{ label: 'Discover Mayavé', href: '/portfolio/mayave' }}
        secondary={{ label: 'Begin a conversation', href: '/contact' }}
      />
    </>
  );
}
