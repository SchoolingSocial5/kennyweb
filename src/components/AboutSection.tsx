import React from 'react';
import Image from 'next/image';
import { PiSparkleFill } from 'react-icons/pi';
import { FaArrowRight } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background Text (Outline) */}
      <div className="absolute top-24 right-[-5%] text-[12rem] font-black select-none pointer-events-none z-0 uppercase tracking-tighter opacity-[0.03]" style={{ WebkitTextStroke: '2px #0f172a' }}>
        About Us
      </div>


      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Image Grid */}
          <div className="relative p-8">
            {/* Decorative Blue Background Shapes */}
            <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-primary rounded-[50px] -z-10 opacity-90"></div>
            <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-navy rounded-[50px] -z-10 opacity-90"></div>
            
            {/* Image Grid */}

            <div className="grid grid-cols-2 gap-4 relative">
              <div className="relative aspect-square rounded-[30px] overflow-hidden shadow-xl border-4 border-white">
                <Image src="/about-1.png" alt="Team 1" fill className="object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="relative aspect-square rounded-[30px] overflow-hidden shadow-xl border-4 border-white">
                <Image src="/about-2.png" alt="Team 2" fill className="object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="relative aspect-square rounded-[30px] overflow-hidden shadow-xl border-4 border-white">
                <Image src="/about-3.png" alt="Team 3" fill className="object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="relative aspect-square rounded-[30px] overflow-hidden shadow-xl border-4 border-white">
                <Image src="/about-4.png" alt="Team 4" fill className="object-cover hover:scale-110 transition-transform duration-500" />
              </div>


              {/* Floating Stars */}
              <div className="absolute -left-12 bottom-12 text-primary animate-bounce">
                <PiSparkleFill size={40} />
              </div>
              <div className="absolute -left-6 bottom-4 text-primary/40 animate-pulse">
                <PiSparkleFill size={24} />
              </div>

              {/* Hire Us Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary rounded-full shadow-lg animate-[spin_10s_linear_infinite]">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
                      <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                      <text className="text-[10px] font-bold uppercase tracking-[2px]">
                        <textPath href="#circlePath">
                          Hire Us • Hire Us • Hire Us • Hire Us •
                        </textPath>
                      </text>
                    </svg>
                  </div>
                  <div className="relative bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-inner">
                    <FaArrowRight className="text-primary -rotate-45" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 font-semibold text-primary">
              <span className="text-2xl">//</span>
              <span className="uppercase tracking-widest text-sm">About Us</span>
            </div>
            
            <h2 className="text-5xl font-extrabold leading-[1.1] text-slate-900">
              Transforming <span className="text-primary">Ideas</span><br />
              <span className="text-primary">into Digital</span> Reality
            </h2>

            <p className="text-slate-500 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>

            <div className="grid grid-cols-3 gap-8 py-8 border-y border-slate-100 my-4">
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-black text-primary">150+</span>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Team Members</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-black text-primary">2000+</span>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Happy Clients</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-black text-primary">99%</span>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Satisfaction</span>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-serif italic text-slate-800">Jenny Alexander</span>
                <span className="text-sm font-bold text-primary mt-1 flex items-center gap-2">
                  Jenny Alexander <span className="text-slate-300">•</span> CEO
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
