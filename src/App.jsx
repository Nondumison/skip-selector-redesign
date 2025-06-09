import React, { useState, useEffect } from "react";
import "./App.css";
import SkipCard from "./components/SkipCard/SkipCard";
import Header from "./components/Header/Header";
import PriceBadge from "./components/PriceBadge/PriceBadge";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import InfoPanel from "./components/InfoPanel/InfoPanel";
import { fetchSkipsData } from "./services/fetchSkips";

function App() {
  const [skips, setSkips] = useState([]);
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const loadSkips = async () => {
      try {
        const data = await fetchSkipsData();
        setSkips(data);
      } catch (err) {
        setError("Failed to load skip data. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadSkips();
  }, []);

  const handleSelectSkip = (skipId) => {
    setSelectedSkip(skipId);
  };

  const handleContinue = () => {
    if (selectedSkip) {
      const selected = skips.find((skip) => skip.id === selectedSkip);
      alert(
        `Proceeding with ${selected.name} at £${selected.price.toFixed(2)}`
      );
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message="Failed to load skips." />;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased">
      <Header />
      <PriceBadge />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-3">
              Select Your Skip
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Select the perfect skip for your garden waste. All prices include
              VAT, delivery, collection, and disposal.
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl shadow-sm p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Available Skips
              </h2>
              <button
                onClick={() => setShowInfo(true)}
                className="text-primary hover:text-primary-dark flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                What's included?
              </button>
            </div>
            <div className="mt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skips.map((skip) => (
                  <SkipCard
                    key={skip.id}
                    skip={skip}
                    selected={selectedSkip === skip.id}
                    onSelect={handleSelectSkip}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
            <button className="px-8 py-3 rounded-lg font-bold text-white transition duration-300 ease-in-out shadow-md w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900">
              Back to Address
            </button>

            <button
              onClick={handleContinue}
              className="px-8 py-3 rounded-lg font-bold text-white transition duration-300 ease-in-out shadow-md w-full sm:w-auto bg-gradient-to-r from-orange-600 to-orange-800 hover:from-orange-700 hover:to-orange-900"
            >
              Continue to Payment
            </button>
          </div>
        </div>
      </main>

      <footer className="text-center p-6 mt-12 text-gray-500 border-t">
        <p>
          &copy; {new Date().getFullYear()} We Want Waste - Redesign by
          Nondumiso
        </p>
      </footer>

      {showInfo && <InfoPanel onClose={() => setShowInfo(false)} />}
    </div>
  );
}

export default App;
