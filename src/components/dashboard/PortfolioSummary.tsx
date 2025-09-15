'use client';

import { ArrowUpIcon, ArrowDownIcon } from '@/components/Icons';

export default function PortfolioSummary() {
  const portfolioValue = 125430.50;
  const todaysChange = 1230.75;
  const todaysChangePercentage = 1.01;

  return (
    <div className="bg-secondary p-6 rounded-lg">
      <h2 className="text-lg font-medium text-gray-300">Portfolio Value</h2>
      <p className="text-3xl font-bold">${portfolioValue.toLocaleString()}</p>
      <div className={`flex items-center mt-2 ${todaysChange > 0 ? 'text-green-500' : 'text-red-500'}`}>
        {todaysChange > 0 ? <ArrowUpIcon className="h-5 w-5 mr-1" /> : <ArrowDownIcon className="h-5 w-5 mr-1" />}
        <span>${todaysChange.toLocaleString()} ({todaysChangePercentage}%) Today</span>
      </div>
    </div>
  );
}
