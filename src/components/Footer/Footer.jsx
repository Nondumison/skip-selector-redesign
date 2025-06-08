// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
              <span className="ml-2 text-xl font-bold">WeWantWaste</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">Sustainable waste management solutions</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition">
              Terms
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} WeWantWaste Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;