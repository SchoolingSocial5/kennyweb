import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaYoutube, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      {/* Top CTA Banner */}
      <div className="container py-16 border-b border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center md:text-left">
            Let's <span className="text-primary">Connect</span> there
          </h2>
          <button className="bg-primary text-white px-10 py-4 rounded-full font-bold transition-all hover:bg-white hover:text-primary shadow-lg hover:shadow-primary/40">
            Contact Us
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo & About */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transform rotate-12">
                <div className="w-6 h-6 border-2 border-white rounded-sm"></div>
              </div>
              <span className="text-2xl font-black tracking-tighter">IT Company<span className="text-primary">.</span></span>
            </div>
            <p className="text-white/60 leading-relaxed max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaYoutube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all hover:-translate-y-1"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold border-l-4 border-primary pl-4">Navigation</h3>
            <ul className="space-y-4 text-white/60 font-medium">
              {['Our Team', 'Career', 'About Us', 'Testimonial', 'FAQs'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold border-l-4 border-primary pl-4">Contact</h3>
            <div className="space-y-6 text-white/60 font-medium">
              <p>(000) 000-0000</p>
              <p>example@gmail.com</p>
              <p className="max-w-[200px]">
                2464 Royal Ln. Mesa,<br />
                New Jersey 45463
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold border-l-4 border-primary pl-4">Get the latest information</h3>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-16 focus:outline-none focus:border-primary transition-all text-sm"
              />
              <button className="absolute right-1 top-1 bottom-1 aspect-square bg-primary rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <FaPaperPlane className="text-xs" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-semibold">
          <p>Copyright © 2025 IT Companyo. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">User Terms & Conditions</a>
            <span className="opacity-40">|</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
