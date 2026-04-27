import React from 'react';
import Hero from '@/components/Hero';
import ServicesScroll from '@/components/ServicesScroll';
import AboutSection from '@/components/AboutSection';
import ServicesGridSection from '@/components/ServicesGridSection';
import WorkProcessSection from '@/components/WorkProcessSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TeamSection from '@/components/TeamSection';
import StatsSection from '@/components/StatsSection';
import NewsSection from '@/components/NewsSection';
import FaqSection from '@/components/FaqSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesScroll />
      <AboutSection />
      <ServicesGridSection />
      <WorkProcessSection />
      <ServicesScroll />
      <WhyChooseUsSection />
      <ProjectsSection />
      <ServicesScroll />
      <ContactSection />
      <TestimonialsSection />
      <TeamSection />
      <StatsSection />
      <NewsSection />
      <FaqSection />
    </>
  );
}











