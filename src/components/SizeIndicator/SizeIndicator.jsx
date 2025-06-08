import React from 'react';

const SizeIndicator = ({ length, width, height }) => {
  return (
    <div className="space-y-3">
      {length && width && height && (
        <div className="text-center">
          <div className="relative w-full h-32 bg-gradient-to-b from-green-100 to-green-50 border border-gray-200 rounded-md">
            <div className="absolute bottom-2 left-2 right-2 h-2 bg-green-300 rounded-full"></div>
            <div className="absolute top-1/2 left-2 w-2 h-16 bg-green-300 rounded-full -mt-8"></div>
            <div className="absolute top-1/2 right-2 w-2 h-16 bg-green-300 rounded-full -mt-8"></div>
          </div>
          <div className="mt-2 text-xs text-gray-500">Visual representation</div>
        </div>
      )}
      
      <div className="space-y-1">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-primary rounded-full mr-2"></div>
          <span className="text-sm text-gray-600">
            {length || 'N/A'}m length
          </span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-primary rounded-full mr-2"></div>
          <span className="text-sm text-gray-600">
            {width || 'N/A'}m width
          </span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-primary rounded-full mr-2"></div>
          <span className="text-sm text-gray-600">
            {height || 'N/A'}m height
          </span>
        </div>
      </div>
    </div>
  );
};

export default SizeIndicator;