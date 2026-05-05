import SustainHero from '@/components/sections/sustain/SustainHero';
import SustainPillars from '@/components/sections/sustain/SustainPillars';
import EditorialBlock from '@/components/sections/EditorialBlock';
import SustainManifesto from '@/components/sections/sustain/SustainManifesto';
import PageCloser from '@/components/sections/PageCloser';

export const metadata = { title: 'Sustainability · Dholakia Retail' };

export default function SustainPage() {
  return (
    <>
      <SustainHero />
      <SustainPillars />
      <EditorialBlock
        eyebrow="The wider context"
        heading="Sustainability is not a chapter. It is the spine."
        paragraphs={[
          'When a family business has worked stones for forty years, the numbers around mining, water, and labour are not abstract. They are the conversations at lunch. They are the reason a son inherits a trade, or refuses one. The choice to build a parent house in 2024 — at the moment the world finally began asking the right questions — was not coincidence. It was overdue.',
          'Dholakia Retail commits to publishing what we measure. Our annual ESG report covers Scope 1, 2 and 3 emissions, water and energy intensity, supplier audits, traceability metrics, and the percentage of our diamond intake from lab-grown channels. We do not declare what we are not yet ready to certify.',
          'We are the first Indian jewellery parent house to commit to SCS-007 Sustainability Rated Diamonds across our lab-grown intake, and we are working toward Responsible Jewellery Council Code of Practices certification across all houses by 2027.'
        ]}
        pullquote={{
          quote: 'We do not declare what we are not yet ready to certify.',
          attribution: 'Sustainability Charter, Article 1'
        }}
      />
      <SustainManifesto />
      <PageCloser
        statement="A *quieter standard.* Patiently kept."
        body="If you are working on responsible sourcing, lab-grown materials science, or supply-chain traceability — we would like to compare notes. Our IR and ESG desks reply within one business day."
        primary={{ label: 'Begin a conversation', href: '/contact' }}
        secondary={{ label: 'Read the journal', href: '/news' }}
      />
    </>
  );
}
