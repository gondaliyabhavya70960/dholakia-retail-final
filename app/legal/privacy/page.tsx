import LegalMasthead from '@/components/sections/legal/LegalMasthead';
import LegalBody, { LegalSection } from '@/components/sections/legal/LegalBody';
import LegalCloser from '@/components/sections/legal/LegalCloser';

export const metadata = { title: 'Privacy Policy — Dholakia Retail' };

const sections: LegalSection[] = [
  {
    number: '01',
    title: 'Who we are.',
    paragraphs: [
      'This Privacy Policy is published by Dholakia Retail Private Limited (CIN U32111GJ2024PTC155690), a company incorporated under the Companies Act, 2013 of India, with its registered office at Diamond Bourse, Surat, Gujarat 395008, India ("Dholakia Retail," "we," "our" or "us"). Dholakia Retail is the parent house of the brands listed on this website, including Mayavé.',
      'This Policy describes how we collect, use, share and protect personal information about visitors to our website, clients of our houses, applicants to our open roles, and members of the press.'
    ]
  },
  {
    number: '02',
    title: 'What we collect.',
    paragraphs: [
      'We collect only the personal information we genuinely need in order to do what you have asked us to do. The categories below are exhaustive — we do not collect, infer or purchase information beyond them.'
    ],
    list: [
      'Identity and contact data: name, email, phone number, professional title, postal address — when you contact us, apply for a role, or request a private viewing.',
      'Application data: CV, cover letter and portfolio links — when you apply for a position.',
      'Technical data: IP address, browser type, device type, referring URL, and pages visited — collected via privacy-respecting analytics.',
      'Cookie data: as set out in our Cookie Policy.',
      'Communications data: the content of any email or message you send us, kept only as long as needed to respond.'
    ]
  },
  {
    number: '03',
    title: 'Why we collect it.',
    paragraphs: [
      'We use personal information for narrowly defined, lawful purposes: to respond to enquiries; to schedule and host private viewings; to assess applications for employment; to send press materials to journalists who request them; to operate, secure and improve our website; and to comply with applicable law.',
      'We do not use personal information for behavioural advertising, retargeting, or sale to third parties. We do not run programmatic ad campaigns and we do not embed third-party advertising trackers.'
    ]
  },
  {
    number: '04',
    title: 'How we share.',
    paragraphs: [
      'We share personal information only with: (i) service providers under written contract who process information strictly on our instructions (hosting, email, analytics, applicant tracking); (ii) our professional advisors (legal, audit, banking) where reasonably required; and (iii) regulators and courts where compelled by law.',
      'We do not sell, rent, license or trade personal information. We do not transfer information across our group of houses without an internal data-sharing record specific to that transfer.'
    ]
  },
  {
    number: '05',
    title: 'How long we keep it.',
    paragraphs: [
      'We retain personal information only for as long as it is needed for the purpose for which we collected it, and for a reasonable period thereafter to defend ourselves in case of dispute, comply with tax and audit law, or fulfil any other legal obligation.',
      'Application materials from unsuccessful candidates are deleted twelve months after the role closes, unless you have asked us to keep them on file for future opportunities.'
    ]
  },
  {
    number: '06',
    title: 'Your rights.',
    paragraphs: [
      'Subject to applicable law, you have the right to: access the personal information we hold about you; correct it where it is wrong; ask us to delete it; restrict or object to certain processing; and, where relevant, port your information to another controller.',
      'You may exercise these rights by writing to us at the email address in the closer of this page. We will respond within thirty (30) days.'
    ]
  },
  {
    number: '07',
    title: 'Security.',
    paragraphs: [
      'We protect personal information using industry-standard administrative, technical and physical safeguards. No system is perfectly secure, but we work, audit and report against the assumption that one day ours will be probed, and we plan accordingly.'
    ]
  },
  {
    number: '08',
    title: 'Changes to this policy.',
    paragraphs: [
      'We may update this Policy from time to time. The “Last updated” date at the top of this page reflects the most recent change. Material changes will be flagged on our home page for thirty (30) days following publication.'
    ]
  }
];

export default function Page() {
  return (
    <>
      <LegalMasthead
        eyebrow="Legal"
        title="Privacy Policy."
        lastUpdated="01 Apr 2026"
        effective="15 Apr 2026"
        version="2.0"
      />
      <LegalBody sections={sections} />
      <LegalCloser
        statement="If you have a question about this Policy, or about how we handle your personal information, write to our Data Protection Office at"
        email="privacy@dholakiaretail.com"
        signature="Data Protection Office · Dholakia Retail Private Limited"
      />
    </>
  );
}
