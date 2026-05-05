import NewsHero from '@/components/sections/news/NewsHero';
import NewsGrid from '@/components/sections/news/NewsGrid';
import PageCloser from '@/components/sections/PageCloser';

export const metadata = { title: 'Newsroom · Dholakia Retail' };

export default function NewsPage() {
  return (
    <>
      <NewsHero />
      <NewsGrid />
      <PageCloser
        statement="Press enquiries — *answered within 24 hours.*"
        body="Our communications team responds to journalists, broadcasters and editors within one business day. The press kit, fact sheet, and approved imagery are available on request."
        primary={{ label: 'Press desk', href: '/contact' }}
        secondary={{ label: 'About the group', href: '/about' }}
      />
    </>
  );
}
