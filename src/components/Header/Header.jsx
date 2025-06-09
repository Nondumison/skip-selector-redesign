import React from "react";

const Header = () => {
  return (
    <header className="py-5 bg-slate-50/80 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-200">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <svg
            className="h-8 w-8 text-brand-green"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-full bg-brand-green flex items-center justify-center text-white text-sm font-bold shadow-md shadow-brand-green/40">
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="font-semibold text-brand-green">Address</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-full border-2 border-slate-800 flex items-center justify-center text-slate-800 text-sm font-bold">
              2
            </div>
            <span className="font-semibold text-slate-800">Select Skip</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-400">
            <div className="w-7 h-7 rounded-full border-2 border-slate-400 flex items-center justify-center text-sm font-bold">
              3
            </div>
            <span className="font-semibold">Payment</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
