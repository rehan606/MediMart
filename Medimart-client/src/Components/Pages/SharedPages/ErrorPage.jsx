import React from 'react';
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <Helmet>
          <title>Error - MediMart</title>
      </Helmet>
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">Page Not Found</h2>
      <p className="text-gray-500 mt-2">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => window.location.href = '/'}
        className="mt-6 px-6 py-3 bg-red-500 text-white text-lg font-medium rounded-lg hover:bg-red-600 focus:outline-none transition-all"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
