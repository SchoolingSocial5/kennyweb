import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaYoutube } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-navy text-white h-[48px] text-[0.85rem] overflow-hidden relative z-[110] hidden md:block">
      <div className="container flex justify-between items-center h-full !pr-0">
        <div className="flex gap-8 lg:gap-4">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-primary" />
            <span>(000) 000-0000</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-primary" />
            <span>example@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-primary" />
            <span>2464 Royal Ln. Mesa, New Jersey 45463</span>
          </div>
        </div>
        
        <div className="relative h-full flex items-center pl-12 pr-8">
          <div className="absolute inset-0 -right-[50px] bg-primary -skew-x-[20deg] z-[1]"></div>
          <div className="relative z-[2] flex gap-[1.2rem]">
            <a href="#" aria-label="Facebook" className="flex items-center justify-center transition-opacity hover:opacity-80"><FaFacebookF /></a>
            <a href="#" aria-label="X" className="flex items-center justify-center transition-opacity hover:opacity-80"><FaTwitter /></a>
            <a href="#" aria-label="Pinterest" className="flex items-center justify-center transition-opacity hover:opacity-80"><FaPinterestP /></a>
            <a href="#" aria-label="Instagram" className="flex items-center justify-center transition-opacity hover:opacity-80"><FaInstagram /></a>
            <a href="#" aria-label="Youtube" className="flex items-center justify-center transition-opacity hover:opacity-80"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


