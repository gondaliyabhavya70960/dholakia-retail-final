import CareersHero from '@/components/sections/careers/CareersHero';
import CareersCulture from '@/components/sections/careers/CareersCulture';
import CareersRoles from '@/components/sections/careers/CareersRoles';
import PageCloser from '@/components/sections/PageCloser';

export const metadata = { title: 'Careers · Dholakia Retail' };

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <CareersCulture />
      <CareersRoles />
      <PageCloser
        statement="Could the *next chapter* be written here?"
        body="The Dholakia Retail talent team responds within five business days to every applicant. If you do not see a role that fits, send us a letter — we keep a long list."
        primary={{ label: 'See open roles', href: '#roles' }}
        secondary={{ label: 'Speculative letter', href: '/contact' }}
      />
    </>
  );
}
