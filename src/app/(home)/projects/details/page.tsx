import React from 'react';
import ProjectDetailsHero from '@/components/home/ProjectDetailsHero';
import ProjectDetailsContent from '@/components/home/ProjectDetailsContent';
import ProjectCTABanner from '@/components/home/ProjectCTABanner';

export const metadata = {
  title: 'Project Details | Kenny Tech Studios',
  description: 'Detailed insights into the software, web, and mobile app projects developed by Kenny Tech Studios.',
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
