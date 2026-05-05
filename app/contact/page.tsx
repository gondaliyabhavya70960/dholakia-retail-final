import ContactHero from '@/components/sections/contact/ContactHero';
import ContactRouting from '@/components/sections/contact/ContactRouting';
import ContactCard from '@/components/sections/contact/ContactCard';
import ContactForm from '@/components/sections/contact/ContactForm';

export const metadata = { title: 'Contact · Dholakia Retail' };

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactRouting />
      <ContactCard />
      <ContactForm />
    </>
  );
}
