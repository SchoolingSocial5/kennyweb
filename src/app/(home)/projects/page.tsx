import React from 'react';
import ProjectsHero from '@/components/home/ProjectsHero';
import ProjectsList from '@/components/home/ProjectsList';
import ProjectCTABanner from '@/components/home/ProjectCTABanner';
import NewsletterSection from '@/components/home/NewsletterSection';

export const metadata = {
  title: 'Our Projects | IT Company',
  description: 'Discover our portfolio of successful IT projects, including mobile apps, web applications, and UI/UX designs.',
};

const ProjectsPage = () => {
  return (
    <main>
      <ProjectsHero />
      <ProjectsList />
      <ProjectCTABanner />
      <NewsletterSection />
    </main>
  );
};

export default ProjectsPage;
