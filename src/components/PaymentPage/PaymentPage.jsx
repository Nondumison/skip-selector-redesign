import React from 'react';

const PaymentPage = ({ selectedSkip, onBack }) => {
  if (!selectedSkip) {
    return (
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Error</h2>
        <p className="text-gray-600">No skip was selected. Please go back and choose a skip.</p>
        <button
          onClick={onBack}
          className="mt-6 px-8 py-3 rounded-lg font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition duration-300"
        >
          Back to Selection
        </button>
      </div>
    );
  }

  return (
    <div className="text-center p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-green-600 mb-4">Payment Details</h2>
      <p className="text-gray-700 text-lg mb-2">
        You are purchasing the <span className="font-bold">{selectedSkip.name}</span>.
      </p>
      <p className="text-gray-500 text-2xl font-light mb-6">
        Total: <span className="font-bold text-gray-800">£{selectedSkip.price.toFixed(2)}</span>
      </p>

      <button
        onClick={onBack}
        className="mt-8 px-8 py-3 rounded-lg font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition duration-300"
      >
        Change Selection
      </button>
    </div>
  );
};

export default PaymentPage;