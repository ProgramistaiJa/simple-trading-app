'use client';

import { TrendingUp, TrendingDown, PlusCircle } from 'lucide-react';

const watchlist = [
  { ticker: 'AAPL', name: 'Apple Inc.', price: 175.25, change: 2.50, changePercentage: 1.45 },
  { ticker: 'GOOGL', name: 'Alphabet Inc.', price: 135.80, change: -1.20, changePercentage: -0.88 },
  { ticker: 'AMZN', name: 'Amazon.com, Inc.', price: 130.50, change: 1.80, changePercentage: 1.40 },
  { ticker: 'TSLA', name: 'Tesla, Inc.', price: 220.10, change: -5.60, changePercentage: -2.48 },
];

export default function Watchlist() {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-white">Watchlist</h2>
        <button className="p-2 hover:bg-gray-700 rounded-full">
          <PlusCircle size={20} className="text-gray-400" />
        </button>
      </div>
      <ul className="space-y-4">
        {watchlist.map((stock) => (
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
