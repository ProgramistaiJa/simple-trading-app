'use client';

import { ArrowUpIcon, ArrowDownIcon } from '@/components/Icons';

const watchlist = [
  { ticker: 'AAPL', name: 'Apple Inc.', price: 175.25, change: 2.50, changePercentage: 1.45 },
  { ticker: 'GOOGL', name: 'Alphabet Inc.', price: 135.80, change: -1.20, changePercentage: -0.88 },
  { ticker: 'AMZN', name: 'Amazon.com, Inc.', price: 130.50, change: 1.80, changePercentage: 1.40 },
  { ticker: 'TSLA', name: 'Tesla, Inc.', price: 220.10, change: -5.60, changePercentage: -2.48 },
];

export default function Watchlist() {
  return (
    <div className="bg-secondary p-6 rounded-lg">
      <h2 className="text-lg font-medium text-gray-300 mb-4">Watchlist</h2>
      <ul className="space-y-4">
        {watchlist.map((stock) => (
          <li key={stock.ticker} className="flex items-center justify-between">
            <div>
              <p className="font-bold">{stock.ticker}</p>
              <p className="text-sm text-gray-400">{stock.name}</p>
            </div>
            <div>
              <p className="font-bold text-right">${stock.price.toFixed(2)}</p>
              <div className={`flex items-center justify-end ${stock.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {stock.change > 0 ? <ArrowUpIcon className="h-4 w-4 mr-1" /> : <ArrowDownIcon className="h-4 w-4 mr-1" />}
                <span>{stock.change.toFixed(2)} ({stock.changePercentage.toFixed(2)}%)</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
