export const fetchSkips = async (postcode = "NR32", area = "Lowestoft") => {
  try {
    const response = await fetch(
      `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`
    );

    if (!response.ok) {
      throw new Error(`Error fetching skips: ${response.statusText}`);
    }

    const data = await response.json();
    return data?.skips || [];
  } catch (error) {
    console.error("Fetch error:", error.message);
    return [];
  }
};
