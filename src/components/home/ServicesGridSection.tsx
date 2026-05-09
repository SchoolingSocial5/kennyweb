import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaArrowRight } from 'react-icons/fa';
import { MdOutlineDesignServices } from 'react-icons/md';

const services = [
  {
    title: 'Website Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...',
    icon: <FaLaptopCode className="text-4xl" />,
    highlight: true
  },
  {
    title: 'Mobile App Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...',
    icon: <FaMobileAlt className="text-4xl" />,
    highlight: false
  },
  {
    title: 'UI/UX Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...',
    icon: <MdOutlineDesignServices className="text-4xl" />,
    highlight: false
  }
];

const ServicesGridSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50">
      {/* Background Text (Outline) */}
      <div className="absolute top-12 left-[-5%] text-[12rem] font-black select-none pointer-events-none z-0 uppercase tracking-tighter opacity-[0.03]" style={{ WebkitTextStroke: '2px #0f172a' }}>
        Services
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="flex flex-col gap-4 max-w-[600px]">
            <div className="flex items-center gap-2 font-semibold text-primary">
              <span className="text-2xl">//</span>
              <span className="uppercase tracking-widest text-sm">Our Services</span>
            </div>
            <h2 className="text-5xl font-extrabold leading-[1.1] text-slate-900">
              Services We Provide to<br />
              <span className="text-primary">Elevate Your Business</span>
            </h2>
          </div>
          <button className="bg-primary text-white px-10 py-4 rounded-full font-semibold transition-all hover:bg-primary-dark hover:-translate-y-1 shadow-lg hover:shadow-primary/30">
            View All Services
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`
                bg-white p-10 rounded-[40px] transition-all duration-500 group cursor-pointer
                flex flex-col gap-6 shadow-sm hover:shadow-xl hover:-translate-y-2
                ${service.highlight ? 'border-b-4 border-l-4 border-primary' : 'border border-slate-100'}
              `}
            >
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center text-white transition-transform duration-500 group-hover:rotate-[360deg]">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-4 flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                <span>Learn more</span>
                <FaArrowRight className="text-sm" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGridSection;
