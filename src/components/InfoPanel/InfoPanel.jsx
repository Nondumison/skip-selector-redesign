import React from "react";

const InfoPanel = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">

      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-800">What's Included</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="ml-3 text-gray-600">
                <span className="font-medium">Skip hire for 14 days</span> -
                Ample time to fill your skip
              </p>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="ml-3 text-gray-600">
                <span className="font-medium">Delivery and collection</span> -
                Convenient service to your location
              </p>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="ml-3 text-gray-600">
                <span className="font-medium">Eco-friendly disposal</span> -
                90%+ of waste recycled
              </p>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="ml-3 text-gray-600">
                <span className="font-medium">No hidden fees</span> - Price
                includes VAT and all charges
              </p>
            </div>

            <div className="pt-4">
              <p className="text-gray-500 text-sm">
                Restrictions may apply for certain waste types. Please ensure
                you only dispose of garden waste in these skips.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="mt-6 w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
