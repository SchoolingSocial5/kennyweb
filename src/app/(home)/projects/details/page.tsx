import React from 'react';
import ProjectDetailsHero from '@/components/home/ProjectDetailsHero';
import ProjectDetailsContent from '@/components/home/ProjectDetailsContent';
import ProjectCTABanner from '@/components/home/ProjectCTABanner';

export const metadata = {
  title: 'Project Details | IT Company',
  description: 'View detailed information about our successful IT projects and solutions.',
};

const ProjectDetailsPage = () => {
  return (
    <main>
      <ProjectDetailsHero />
      <ProjectDetailsContent />
      <ProjectCTABanner />
    </main>
  );
};

export default ProjectDetailsPage;
