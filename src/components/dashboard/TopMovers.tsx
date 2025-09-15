'use client';

import { TrendingUp, TrendingDown } from 'lucide-react';

const topMovers = [
  { ticker: 'NVDA', name: 'NVIDIA Corporation', price: 450.75, change: 25.50, changePercentage: 6.00 },
  { ticker: 'AMD', name: 'Advanced Micro Devices, Inc.', price: 110.20, change: 5.80, changePercentage: 5.55 },
  { ticker: 'META', name: 'Meta Platforms, Inc.', price: 300.90, change: 12.30, changePercentage: 4.25 },
  { ticker: 'NFLX', name: 'Netflix, Inc.', price: 400.10, change: -15.60, changePercentage: -3.76 },
];

export default function TopMovers() {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-lg font-semibold text-white mb-4">Top Movers</h2>
      <ul className="space-y-4">
        {topMovers.map((stock) => (
          <li key={stock.ticker} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
            <div>
              <p className="font-bold text-white">{stock.ticker}</p>
              <p className="text-sm text-gray-400 truncate w-32">{stock.name}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-white">${stock.price.toFixed(2)}</p>
              <div className={`flex items-center justify-end ${stock.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                {stock.change > 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                <span className="text-sm">{stock.change.toFixed(2)} ({stock.changePercentage.toFixed(2)}%)</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
