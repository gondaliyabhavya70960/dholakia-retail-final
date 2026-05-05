import LegalMasthead from '@/components/sections/legal/LegalMasthead';
import LegalBody, { LegalSection } from '@/components/sections/legal/LegalBody';
import LegalCloser from '@/components/sections/legal/LegalCloser';
import CookiePreferenceCard from '@/components/sections/legal/CookiePreferenceCard';

export const metadata = { title: 'Cookie Policy — Dholakia Retail' };

const sectionsTop: LegalSection[] = [
  {
    number: '01',
    title: 'What is a cookie.',
    paragraphs: [
      'A cookie is a small text file that a website places on your device when you visit it. Cookies allow a website to recognise your device on a return visit, remember your preferences, and gather aggregated information about how the site is used.',
      'This Policy describes the cookies and similar technologies used on dholakiaretail.com ("the Site") and gives you the controls to accept, reject or fine-tune them.'
    ]
  },
  {
    number: '02',
    title: 'How we use them.',
    paragraphs: [
      'We use a deliberately small number of cookies, in three categories. Essential cookies are required for the Site to function — for example, to remember that you have already accepted this Policy. Analytics cookies allow us to measure, in aggregate and without identifying any individual, how visitors use the Site so we can improve it. Preference cookies remember small choices, such as your last visited page in our Newsroom.',
      'We do not use behavioural-advertising cookies, retargeting cookies, or any cookie that sells your browsing history to a third party.'
    ]
  }
];

const sectionsBottom: LegalSection[] = [
  {
    number: '03',
    title: 'Third parties.',
    paragraphs: [
      'A small number of cookies on the Site are set by third-party providers we have contracted to deliver specific services — for example, a privacy-respecting analytics provider, an applicant-tracking system on the Careers page, and an embedded video player on certain editorial articles.',
      'In each case, the third party processes data only on our written instructions and is contractually prohibited from using it for its own purposes.'
    ]
  },
  {
    number: '04',
    title: 'How to manage cookies.',
    paragraphs: [
      'You can change your preferences at any time using the panel above on this page. You can also block, restrict or delete cookies in your browser settings — though doing so may affect how parts of the Site work.'
    ]
  }
];

export default function Page() {
  return (
    <>
      <LegalMasthead
        eyebrow="Legal"
        title="Cookie Policy."
        lastUpdated="01 Apr 2026"
        effective="15 Apr 2026"
        version="2.0"
      />
      <LegalBody sections={sectionsTop} />
      <CookiePreferenceCard />
      <LegalBody sections={sectionsBottom} />
      <LegalCloser
        statement="For questions about cookies, or to request a complete inventory of the technologies set on your device, write to"
        email="privacy@dholakiaretail.com"
        signature="Data Protection Office · Dholakia Retail Private Limited"
      />
    </>
  );
}
