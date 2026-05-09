import React from 'react';
import ContactHero from '@/components/home/ContactHero';
import ContactSection from '@/components/home/ContactSection';
import ContactMap from '@/components/home/ContactMap';

export const metadata = {
  title: 'Contact Us | IT Company',
  description: 'Get in touch with us for your IT needs. We offer free quotes and professional consultation for web development, app development, and UI/UX design.',
};

const ContactPage = () => {
  return (
    <main>
      <ContactHero />
      <ContactSection />
      <ContactMap />
    </main>
  );
};

export default ContactPage;
