import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/global/SiteHeader';
import SiteFooter from '@/components/global/SiteFooter';
import CustomCursor from '@/components/motion/CustomCursor';
import SmoothScroll from '@/components/motion/SmoothScroll';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap'
});

const sans = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Dholakia Retail — A House of Houses',
  description:
    'Dholakia Retail is the parent house behind a curated portfolio of luxury jewellery brands, beginning with Mayavé. Editorial flagship for craftsmanship, sustainability and innovation.',
  metadataBase: new URL('https://dholakia-retail.example.com'),
  openGraph: {
    title: 'Dholakia Retail — A House of Houses',
    description: 'Editorial flagship of a luxury jewellery parent company.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-ivory text-ink">
        <SmoothScroll />
        <CustomCursor />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
