// src/components/PriceBadge.jsx
import React from 'react';

const PriceBadge = ({ price, selected }) => {
  return (
    <div className={`flex flex-col items-end ${
      selected ? 'text-primary' : 'text-gray-700'
    }`}>
      <span className="font-bold text-xl">
        £{price?.toFixed(2) || '0.00'}
      </span>
      <span className="text-xs text-gray-500">total</span>
    </div>
  );
};

export default PriceBadge;