'use client';

import { ArrowUpIcon, ArrowDownIcon } from '@/components/Icons';

const topMovers = [
  { ticker: 'NVDA', name: 'NVIDIA Corporation', price: 450.75, change: 25.50, changePercentage: 6.00 },
  { ticker: 'AMD', name: 'Advanced Micro Devices, Inc.', price: 110.20, change: 5.80, changePercentage: 5.55 },
  { ticker: 'META', name: 'Meta Platforms, Inc.', price: 300.90, change: 12.30, changePercentage: 4.25 },
  { ticker: 'NFLX', name: 'Netflix, Inc.', price: 400.10, change: -15.60, changePercentage: -3.76 },
];

export default function TopMovers() {
  return (
    <div className="bg-secondary p-6 rounded-lg">
      <h2 className="text-lg font-medium text-gray-300 mb-4">Top Movers</h2>
      <ul className="space-y-4">
        {topMovers.map((stock) => (
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
