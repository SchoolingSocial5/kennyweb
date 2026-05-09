'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

import Link from 'next/link';

const categories = ["All", "Website Development", "Mobile App Development", "UI/UX Design", "Graphics Design"];

const projects = [
  {
    title: 'Care Connect - Doctor Appointment App',
    category: 'Mobile App Development',
    tags: ['UI/UX Design', 'App Design', 'Wireframe'],
    image: '/project-1.png'
  },
  {
    title: 'Dental - Dentist and Dental Clinic Website UIUX Design',
    category: 'UI/UX Design',
    tags: ['UI/UX Design', 'Web Design', 'Wireframe'],
    image: '/project-2.png'
  },
  {
    title: 'Car Rental - Car Rental Booking Mobile App',
    category: 'Mobile App Development',
    tags: ['UI/UX Design', 'App Design', 'Wireframe'],
    image: '/project-3.png'
  },
  {
    title: 'Hotel Booking - Hotel Booking App Landing Page UIUX Design',
    category: 'UI/UX Design',
    tags: ['UI/UX Design', 'Landing Page', 'Wireframe'],
    image: '/project-4.png'
  },
  {
    title: 'Hotel Booking - Hotel Booking Mobile App',
    category: 'Mobile App Development',
    tags: ['UI/UX Design', 'App Design', 'Wireframe'],
    image: '/project-1.png'
  },
  {
    title: 'Car Rental - Car Rental App Landing Page UIUX Design',
    category: 'UI/UX Design',
    tags: ['UI/UX Design', 'Landing Page', 'Wireframe'],
    image: '/project-2.png'
  }
];

const ProjectsList = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 bg-white">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center gap-2 font-semibold text-primary">
            <span className="text-2xl">//</span>
            <span className="uppercase tracking-widest text-sm">Our Latest Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Explore Our Showcase of<br />
            <span className="text-primary">Featured Works</span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-8 py-3 rounded-full font-semibold transition-all
                ${activeCategory === cat 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'bg-white text-slate-600 border border-slate-100 hover:border-primary hover:text-primary'}
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <Link key={index} href="/projects/details">
              <div className="group relative rounded-[40px] overflow-hidden aspect-[4/3] cursor-pointer">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent p-10 flex flex-col justify-end">
                  <div className="space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                      {project.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-4 py-1.5 bg-white/10 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow Button */}
                  <div className="absolute bottom-10 right-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-3xl transform translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white hover:text-primary shadow-xl shadow-primary/30 rotate-[-45deg] group-hover:rotate-0">
                    <HiOutlineArrowNarrowRight />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center">
          <button className="bg-primary text-white px-10 py-4 rounded-full font-bold transition-all hover:bg-navy hover:-translate-y-1 shadow-lg hover:shadow-primary/30 flex items-center gap-2">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
