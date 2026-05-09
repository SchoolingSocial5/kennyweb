import React from 'react';
import ServicesHero from '@/components/home/ServicesHero';
import ServicesList from '@/components/home/ServicesList';
import ServicesMarquee from '@/components/home/ServicesMarquee';

export const metadata = {
  title: 'Our Services | IT Company',
  description: 'Explore the wide range of IT services we provide to elevate your business, including web development, mobile apps, and cloud computing.',
};

const ServicesPage = () => {
  return (
    <main>
      <ServicesHero />
      <ServicesList />
      <ServicesMarquee />
    </main>
  );
};

export default ServicesPage;
