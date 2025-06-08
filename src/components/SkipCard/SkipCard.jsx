// src/components/SkipCard.jsx
import React from 'react';
import SizeIndicator from '../SizeIndicator/SizeIndicator';
import PriceBadge from '../PriceBadge/PriceBadge';

const SkipCard = ({ skip, selected, onSelect }) => {
  const totalPrice = skip.price;
  const vatAmount = totalPrice - (skip.price_before_vat || totalPrice / 1.2);
  
  return (
    <div 
      className={`relative border-2 rounded-xl p-6 transition-all duration-300 cursor-pointer h-full flex flex-col ${
        selected 
          ? 'border-primary shadow-lg bg-primary/5' 
          : 'border-gray-200 hover:border-primary/50 hover:shadow-md'
      }`}
      onClick={() => onSelect(skip.id)}
    >
      {selected && (
        <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
          Selected
        </div>
      )}
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{skip.name}</h3>
          <p className="text-gray-500 text-sm mt-1">For garden waste</p>
        </div>
        <PriceBadge price={totalPrice} selected={selected} />
      </div>
      
      <div className="mb-5 flex-grow">
        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <SizeIndicator 
            length={skip.dimensions?.length} 
            width={skip.dimensions?.width} 
            height={skip.dimensions?.height} 
          />
        </div>
        
        <p className="text-gray-600 text-sm">{skip.description}</p>
      </div>
      
      <div className="mt-auto">
        <div className="flex justify-between text-sm text-gray-500 mb-3">
          <span>Hire period: {skip.hire_period_days || 14} days</span>
          <span>VAT: £{vatAmount.toFixed(2)}</span>
        </div>
        
        <button 
          className={`w-full py-3 rounded-lg font-semibold transition-colors ${
            selected 
              ? 'bg-primary text-white hover:bg-primary-dark' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {selected ? 'Selected' : 'Select This Skip'}
        </button>
      </div>
    </div>
  );
};

export default SkipCard;