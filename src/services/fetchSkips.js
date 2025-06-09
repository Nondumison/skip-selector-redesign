const API_URL = import.meta.env.VITE_API_URL;

const getDimensions = (size) => {
  const dimensionsMap = {
    4: { length: 3.5, width: 1.8, height: 1.2 },
    6: { length: 4.0, width: 1.8, height: 1.4 },
    8: { length: 4.5, width: 1.8, height: 1.6 },
    10: { length: 4.5, width: 1.8, height: 1.8 },
    12: { length: 4.5, width: 1.8, height: 2.0 },
    14: { length: 4.5, width: 1.8, height: 2.2 },
    16: { length: 4.5, width: 1.8, height: 2.4 },
    20: { length: 5.5, width: 2.2, height: 2.0 },
    40: { length: 6.0, width: 2.4, height: 2.0 },
  };
  return dimensionsMap[size] || { length: null, width: null, height: null };
};

const getDescription = (size) => {
  const descriptions = {
    4: "Perfect for small garden clearances or DIY projects. Holds about 20-25 bin bags.",
    6: "Ideal for medium-sized garden projects. Can hold approximately 30-40 bin bags.",
    8: "Great for larger garden renovations. Accommodates about 50-60 bin bags.",
    10: "Suited for significant landscaping work. Fits approximately 70-80 bin bags.",
    12: "For extensive garden clearance. Holds about 90-100 bin bags of waste.",
    14: "Large capacity skip for major projects. Accommodates 110-130 bin bags.",
    16: "Extra large skip for substantial garden renovations. Holds 140-160 bin bags.",
    20: "Roll-on roll-off skip for commercial garden projects. Massive capacity.",
    40: "Maximum capacity skip for industrial garden waste clearance.",
  };
  return descriptions[size] || "Professional skip for garden waste disposal.";
};

export const fetchSkipsData = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const rawData = await response.json();

    const enhancedData = rawData.map((skip) => {
      const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);

      return {
        ...skip,
        name: `${skip.size} Yard Skip`,
        dimensions: getDimensions(skip.size),
        description: getDescription(skip.size),
        price: totalPrice,
      };
    });

    return enhancedData;
  } catch (error) {
    console.error("Failed to fetch and process skip data:", error);
    throw error;
  }
};
