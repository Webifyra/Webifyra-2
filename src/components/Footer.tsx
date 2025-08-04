import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const services = [
    { name: 'Amazon Services', path: '/services/amazon' },
    { name: 'Shopify Services', path: '/services/shopify' },
    { name: 'Meta Ads', path: '/services/meta-ads' },
    { name: 'Social Media Marketing', path: '/services/social-media' },
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'UGC Content Creation', path: '/services/ugc-content' },
  ];

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-white text-[#022877] border-t border-gray-200 font-['Open_Sans']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1 - Company */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <img 
                src="https://i.postimg.cc/kGL816N6/Logo-1.png" 
                alt="Webifyra Logo" 
                className="h-[70px] w-auto object-contain mx-auto lg:mx-0"
              />
            </div>
            <div className="flex justify-center lg:justify-start">
              <a 
                href="https://www.instagram.com/webifyra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <Instagram className="h-6 w-6 text-white group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-bold mb-6 text-[#022877] font-['Poppins']">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link 
                    to={service.path} 
                    className="text-gray-600 hover:text-[#05ccc2] transition-all duration-300 hover:underline hover:underline-offset-4 text-sm leading-relaxed block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Our Achievements */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-bold mb-6 text-[#022877] font-['Poppins']">Our Achievements</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-600 hover:text-[#05ccc2] transition-all duration-300 hover:underline hover:underline-offset-4 text-sm leading-relaxed"
                >
                  Testimonials & Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-600 hover:text-[#05ccc2] transition-all duration-300 hover:underline hover:underline-offset-4 text-sm leading-relaxed"
                >
                  Who We Are
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-bold mb-6 text-[#022877] font-['Poppins']">Contact</h3>
            <div className="space-y-4">
              <a 
                href="mailto:mr.muh382745@gmail.com" 
                className="flex items-center justify-center lg:justify-start text-gray-600 hover:text-[#05ccc2] transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-[#05ccc2]/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-[#05ccc2]/20 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-[#05ccc2] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-sm group-hover:underline group-hover:underline-offset-4">
                  webifyra@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="text-center">
            <p className="text-sm text-gray-500 font-['Open_Sans']">
              © 2025 Webifyra. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};