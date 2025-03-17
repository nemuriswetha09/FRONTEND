// src/pages/Home.jsx
import React from 'react';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Welcome to Tasty Bites!</h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl">
        Your one-stop destination for delicious, homemade meals.
      </p>
    </div>
  );
}

export default Home;
