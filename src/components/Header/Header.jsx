// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
            <div className="ml-4">
              <h1 className="text-xl font-bold text-gray-900">WeWantWaste</h1>
              <p className="text-sm text-gray-500">Eco-friendly waste solutions</p>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="flex space-x-1">
              <div className="px-3 py-1 bg-gray-200 rounded-full text-sm">1. Address</div>
              <div className="px-3 py-1 bg-primary text-white rounded-full text-sm">2. Skip Size</div>
              <div className="px-3 py-1 bg-gray-200 rounded-full text-sm">3. Payment</div>
            </div>
          </div>
          
          <button className="text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;