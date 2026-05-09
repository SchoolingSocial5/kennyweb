import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaArrowRight, FaPalette, FaCloud, FaCheckDouble, FaGamepad, FaShieldAlt } from 'react-icons/fa';
import { MdOutlineDesignServices } from 'react-icons/md';
import { HiOutlineSpeakerphone } from 'react-icons/hi';

const services = [
  {
    title: 'Website Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: <FaLaptopCode className="text-3xl" />,
    highlight: true
  },
  {
    title: 'Mobile App Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: <FaMobileAlt className="text-3xl" />,
    highlight: false
  },
  {
    title: 'UI/UX Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: <MdOutlineDesignServices className="text-3xl" />,
    highlight: false
  },
  {
    title: 'Graphics Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: <FaPalette className="text-3xl" />,
    highlight: false
  },
  {
    title: 'Digital Marketing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: <HiOutlineSpeakerphone className="text-3xl" />,
    highlight: false
  },
  {
    title: 'Cloud Computing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: <FaCloud className="text-3xl" />,
    highlight: false
  },
  {
    title: 'QA & Testing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: <FaCheckDouble className="text-3xl" />,
    highlight: false
  },
  {
    title: 'Game Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: <FaGamepad className="text-3xl" />,
    highlight: false
  },
  {
    title: 'Network Security',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: <FaShieldAlt className="text-3xl" />,
    highlight: false
  }
];

const ServicesList = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 font-semibold text-primary">
            <span className="text-2xl">//</span>
            <span className="uppercase tracking-widest text-sm">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Services We Provide to<br />
            <span className="text-primary">Elevate Your Business</span>
          </h2>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`
                p-8 md:p-10 rounded-[30px] transition-all duration-300 group cursor-pointer
                flex flex-col gap-6 shadow-[0_0_50px_rgba(0,0,0,0.03)] hover:shadow-[0_0_50px_rgba(59,130,246,0.1)] hover:-translate-y-2
                ${service.highlight ? 'border-2 border-primary' : 'border border-slate-50 bg-white'}
              `}
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white transition-transform duration-500 group-hover:scale-110">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed text-[0.95rem]">
                {service.description}
              </p>
              
              <div className="mt-2 flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                <span className="text-sm">Learn more</span>
                <FaArrowRight className="text-xs" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
