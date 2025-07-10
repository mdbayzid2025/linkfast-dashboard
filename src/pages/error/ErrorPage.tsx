import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-no-repeat bg-center px-4"
      style={{
        backgroundImage: "url('/errorBG.jpg')", // ✅ use url()
      }}
    >
      <div className=" backdrop-blur-md p-10 rounded-xl shadow-2xl text-center max-w-md w-full">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
