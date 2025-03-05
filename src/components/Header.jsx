import React from 'react';

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 p-4 shadow-lg flex items-center justify-between">
      <div className="flex items-center">
        <svg className="w-7 h-7 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <h1 className="text-white text-2xl font-bold tracking-wide">ProjectPilot</h1>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200">
          Dashboard
        </button>
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-indigo-700 font-bold">
          BM
        </div>
      </div>
    </div>
  );
};

export default Header;