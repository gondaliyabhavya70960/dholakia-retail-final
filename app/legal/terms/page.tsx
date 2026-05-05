import LegalMasthead from '@/components/sections/legal/LegalMasthead';
import LegalBody, { LegalSection } from '@/components/sections/legal/LegalBody';
import LegalCloser from '@/components/sections/legal/LegalCloser';

export const metadata = { title: 'Terms & Conditions — Dholakia Retail' };

const sections: LegalSection[] = [
  {
    number: '01',
    title: 'Agreement.',
    paragraphs: [
      'These Terms & Conditions ("Terms") govern your access to and use of the website operated by Dholakia Retail Private Limited at dholakiaretail.com (the "Site"). By accessing the Site, you agree to be bound by these Terms. If you do not agree, please leave the Site.'
    ]
  },
  {
    number: '02',
    title: 'About this site.',
    paragraphs: [
      'The Site is corporate communication. It is not a transactional shopfront, it does not host an e-commerce checkout, and no contract for the supply of goods or services is formed by your use of the Site. Enquiries placed through the Site are introductory only; any subsequent commercial relationship is governed by a separate written agreement.'
    ]
  },
  {
    number: '03',
    title: 'Intellectual property.',
    paragraphs: [
      'All content on this Site — text, photography, design, code, marks and logos — is owned by, or licensed to, Dholakia Retail Private Limited and is protected under Indian and international intellectual-property law.',
      'You may view, share and quote short extracts of editorial content for personal or journalistic purposes with proper attribution. You may not copy, republish, reproduce, modify, scrape, train artificial-intelligence models on, or commercially exploit any part of the Site without our prior written consent.'
    ]
  },
  {
    number: '04',
    title: 'Acceptable use.',
    paragraphs: [
      'You agree not to use the Site in any way that is unlawful, harmful, or that interferes with the Site or its users. In particular:'
    ],
    list: [
      'No automated extraction, scraping or bulk download of Site content.',
      'No reverse-engineering, probing, penetration testing or stress-testing without our prior written permission.',
      'No use of the Site to transmit malware, phishing content or spam.',
      'No impersonation of Dholakia Retail Private Limited, our houses, or any of our representatives.'
    ]
  },
  {
    number: '05',
    title: 'No warranty.',
    paragraphs: [
      'The Site is provided on an “as is” and “as available” basis. We make no warranty, express or implied, that the Site will be uninterrupted, error-free, secure, or fit for any particular purpose. We may change, suspend or discontinue any part of the Site at any time without notice.'
    ]
  },
  {
    number: '06',
    title: 'Limitation of liability.',
    paragraphs: [
      'To the maximum extent permitted by law, Dholakia Retail Private Limited and its directors, officers, employees and affiliates will not be liable for any indirect, incidental, special, consequential or punitive damages arising out of, or related to, your use of, or inability to use, the Site.',
      'Nothing in these Terms limits any liability that cannot be limited under applicable law (including liability for fraud, gross negligence, or wilful misconduct).'
    ]
  },
  {
    number: '07',
    title: 'Third-party links.',
    paragraphs: [
      'The Site may include links to third-party websites that are not under our control. We are not responsible for the content, policies or practices of those websites. A link is not an endorsement.'
    ]
  },
  {
    number: '08',
    title: 'Governing law.',
    paragraphs: [
      'These Terms are governed by the laws of India. The courts of Surat, Gujarat have exclusive jurisdiction over any dispute arising out of, or in connection with, these Terms or your use of the Site.'
    ]
  }
];

export default function Page() {
  return (
    <>
      <LegalMasthead
        eyebrow="Legal"
        title="Terms & Conditions."
        lastUpdated="01 Apr 2026"
        effective="15 Apr 2026"
        version="2.0"
      />
      <LegalBody sections={sections} />
      <LegalCloser
        statement="For questions about these Terms, including licensing of editorial content, write to our General Counsel at"
        email="legal@dholakiaretail.com"
        signature="Office of the General Counsel · Dholakia Retail Private Limited"
      />
    </>
  );
}
