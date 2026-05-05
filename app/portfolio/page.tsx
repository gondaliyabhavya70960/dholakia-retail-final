import PageHero from '@/components/sections/PageHero';
import PageCloser from '@/components/sections/PageCloser';
import PortfolioMayaveFeature from '@/components/sections/portfolio/PortfolioMayaveFeature';
import PortfolioFuture from '@/components/sections/portfolio/PortfolioFuture';

export const metadata = { title: 'Portfolio · Dholakia Retail' };

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={'A house of houses.'}
        subtitle="One flagship in market. Three on the horizon. Each conceived independently, built with shared discipline, and stewarded by Dholakia Retail."
        imageSrc="/images/lookbook-2.jpg"
        variant="fullbleed"
      />
      <PortfolioMayaveFeature />
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
