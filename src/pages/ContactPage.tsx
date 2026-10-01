import { ContactHeader } from '@/components/contact/ContactHeader';
import { ContactOptions } from '@/components/contact/ContactOptions';
import { ContactForm } from '@/components/contact/ContactForm';
import { TuroCTA } from '@/components/contact/TuroCTA';

export function ContactPage() {
  return (
    <>
      <ContactHeader />
      <ContactOptions />
      <ContactForm />
      <TuroCTA />
    </>
  );
}
