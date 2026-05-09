import React from 'react';
import Image from 'next/image';
import { HiCheckCircle } from 'react-icons/hi';

const ProjectDetailsContent = () => {
  const checkItems = [
    "Lorem ipsum dolor",
    "Beatae vitae dicta sunt",
    "Sed ut perspiciatis",
    "Explicabo Nemo enim",
    "Vitae dicta sunt explicabo",
    "Explicabo Nemo enim",
    "Veritatis et quasi architecto",
    "Explicabo Nemo enim"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        {/* Project Large Image */}
        <div className="relative aspect-[16/9] rounded-[40px] overflow-hidden mb-16 shadow-2xl">
          <Image 
            src="/project-1.png" 
            alt="Project Detail" 
            fill 
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-extrabold text-slate-900">
                Care Connect - Doctor Appointment App
              </h2>
              
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  L
                </div>
                <p className="text-slate-600 leading-relaxed text-lg italic font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="space-y-6 text-slate-500 leading-relaxed">
                <p>
                  ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat volupta.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">The Challenge</h3>
              <p className="text-slate-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.
              </p>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-slate-900">The Solution</h3>
              <p className="text-slate-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {checkItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-slate-700 font-semibold">
                    <HiCheckCircle className="text-primary text-2xl" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project Meta Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-navy rounded-[30px] p-10 text-white relative overflow-hidden shadow-xl sticky top-24">
              {/* Topo Pattern Overlay */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none bg-repeat"
                style={{ backgroundImage: 'url("/topo-pattern.png")' }}
              ></div>

              <div className="relative z-10 space-y-8">
                <div className="space-y-2">
                  <p className="text-white/60 text-sm font-medium uppercase tracking-widest">Project Category :</p>
                  <p className="text-xl font-bold">App UIUX Design</p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-white/60 text-sm font-medium uppercase tracking-widest">Client :</p>
                  <p className="text-xl font-bold">Ava Mitchell</p>
                </div>

                <div className="space-y-2">
                  <p className="text-white/60 text-sm font-medium uppercase tracking-widest">Duration :</p>
                  <p className="text-xl font-bold">3 Months</p>
                </div>

                <div className="space-y-2">
                  <p className="text-white/60 text-sm font-medium uppercase tracking-widest">Country :</p>
                  <p className="text-xl font-bold">United States</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsContent;
