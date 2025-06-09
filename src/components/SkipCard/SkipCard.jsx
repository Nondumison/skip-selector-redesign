import React from "react";
import PriceBadge from "../PriceBadge/PriceBadge";

import skip4 from "../../assets/4-yarder-skip.jpg";
import skip6 from "../../assets/4-yarder-skip.jpg";
import skip8 from "../../assets/4-yarder-skip.jpg";
import skip10 from "../../assets/4-yarder-skip.jpg";
import skip12 from "../../assets/4-yarder-skip.jpg";
import skip14 from "../../assets/14-yarder-skip.jpg";
import skip16 from "../../assets/16-yarder-skip.jpg";
import skip20 from "../../assets/20-yarder-skip.jpg";

const getSkipVisuals = (size) => {
  if (size <= 4) return { image: skip4, badge: null };
  if (size <= 6) return { image: skip6, badge: "Most Popular" };
  if (size <= 8) return { image: skip8, badge: "Most Popular" };
  if (size <= 10) return { image: skip10, badge: "Best Value" };
  if (size <= 12) return { image: skip12, badge: "Best Value" };
  if (size <= 14) return { image: skip14, badge: null };
  if (size <= 16) return { image: skip16, badge: null };
  return { image: skip20, badge: null };
};

const SkipCard = ({ skip, selected, onSelect }) => {
  const { image, badge } = getSkipVisuals(skip.size);

  return (
    <div
      className={`relative border-2 rounded-xl p-5 transition-all duration-300 cursor-pointer group flex flex-col text-left ${
        selected
          ? "border-green-500 bg-green-50/50 ring-4 ring-green-500/10"
          : "border-transparent bg-slate-50 hover:bg-slate-100 hover:border-slate-200"
      }`}
      onClick={() => onSelect(skip.id)}
    >
      {badge && !selected && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 text-xs font-semibold text-white bg-orange-500 rounded-full shadow-md">
            {badge}
          </span>
        </div>
      )}

      <div className="bg-gray-200 rounded-lg mb-4 p-4 border border-slate-100">
        <img
          src={image}
          alt={`${skip.size}-yard skip`}
          className="w-full h-32 object-contain rounded-md"
        />
      </div>

      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-lg font-bold text-slate-800">{skip.name}</h3>
          <p className="text-slate-500 text-sm mt-1">{skip.description}</p>
        </div>
        <PriceBadge price={skip.price} selected={selected} />
      </div>

      <div className="mt-auto pt-4 border-t border-slate-200">
        <div className="flex justify-between items-center text-sm text-slate-500">
          <span>Hire for {skip.hire_period_days || 14} days</span>
          {selected && (
            <span className="font-bold text-green-600">Selected ✔</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkipCard;
