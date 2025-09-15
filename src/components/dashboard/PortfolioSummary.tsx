'use client';

import { TrendingUp, TrendingDown } from 'lucide-react';

export default function PortfolioSummary() {
  const portfolioValue = 125430.50;
  const todaysChange = 1230.75;
  const todaysChangePercentage = 1.01;

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-sm font-medium text-gray-400 mb-2">Portfolio Value</h2>
      <p className="text-4xl font-bold text-white">${portfolioValue.toLocaleString()}</p>
      <div className={`flex items-center mt-4 ${todaysChange > 0 ? 'text-green-400' : 'text-red-400'}`}>
        {todaysChange > 0 ? 
          <TrendingUp className="h-5 w-5 mr-2" /> : 
          <TrendingDown className="h-5 w-5 mr-2" />
        }
        <span className="font-semibold">${todaysChange.toLocaleString()} ({todaysChangePercentage}%)</span>
        <span className="text-gray-400 ml-2">Today</span>
      </div>
    </div>
  );
}
