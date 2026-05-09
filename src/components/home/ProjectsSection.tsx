import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const projects = [
  {
    title: 'Care Connect - Doctor Appointment App',
    image: '/project-1.png',
    tags: ['UI/UX Design', 'App Design', 'Wireframe']
  },
  {
    title: 'Dental - Dentist and Dental Clinic Website UIUX Design',
    image: '/project-2.png',
    tags: ['UI/UX Design', 'Web Design', 'Wireframe']
  },
  {
    title: 'Car Rental - Car Rental Booking Mobile App',
    image: '/project-3.png',
    tags: ['UI/UX Design', 'App Design', 'Wireframe']
  },
  {
    title: 'Hotel Booking - Hotel Booking App Landing Page UIUX Design',
    image: '/project-4.png',
    tags: ['UI/UX Design', 'Landing Page', 'Wireframe']
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background Text (Outline) */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-[10rem] font-black select-none pointer-events-none z-0 uppercase tracking-tighter opacity-[0.03] whitespace-nowrap" style={{ WebkitTextStroke: '2px #0f172a' }}>
        Latest Projects
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <div className="flex items-center gap-2 font-semibold text-primary">
            <span className="text-2xl">//</span>
            <span className="uppercase tracking-widest text-sm">Our Latest Projects</span>
          </div>
          <h2 className="text-5xl font-extrabold leading-[1.1] text-slate-900">
            Explore Our Showcase of<br />
            <span className="text-primary">Featured Works</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative aspect-square rounded-[40px] overflow-hidden shadow-2xl cursor-pointer"
            >
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-3xl font-bold text-white mb-6 leading-tight max-w-[80%]">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tIndex) => (
                    <span 
                      key={tIndex} 
                      className="px-6 py-2 border border-white/30 rounded-full text-white text-sm font-medium backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Floating Arrow Button */}
                <div className="absolute bottom-10 right-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-xl transform rotate-[-45deg] group-hover:rotate-0 transition-transform duration-500">
                  <FaArrowRight className="text-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-primary text-white px-12 py-5 rounded-full font-bold text-lg transition-all hover:bg-primary-dark hover:-translate-y-1 shadow-lg hover:shadow-primary/40 flex items-center gap-3">
            View All Works <HiOutlineArrowNarrowRight className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
