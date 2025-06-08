import React from 'react';

const ErrorMessage = ({ message }) => (
  <div className="text-center bg-red-100 text-red-700 p-4 rounded-lg">
    <p className="font-bold">Oops! Something went wrong.</p>
    <p>{message}</p>
  </div>
);

export default ErrorMessage;