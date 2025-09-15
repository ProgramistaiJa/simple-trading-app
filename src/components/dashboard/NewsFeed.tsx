'use client';

const news = [
  { id: 1, source: 'Bloomberg', title: 'Global markets rally on positive inflation data.', time: '2h ago', link: '#' },
  { id: 2, source: 'Reuters', title: 'Tech stocks lead the way as investors eye AI developments.', time: '4h ago', link: '#' },
  { id: 3, source: 'The Wall Street Journal', title: 'Federal Reserve holds interest rates steady.', time: '6h ago', link: '#' },
  { id: 4, source: 'Financial Times', title: 'Oil prices fall on demand concerns.', time: '8h ago', link: '#' },
];

export default function NewsFeed() {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-lg font-semibold text-white mb-4">Latest News</h2>
      <ul className="space-y-4">
        {news.map((item) => (
          <li key={item.id} className="border-b border-gray-700 pb-4 last:border-b-0">
            <a href={item.link} className="group">
              <p className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">{item.title}</p>
              <div className="flex items-center text-sm text-gray-400 mt-2">
                <span>{item.source}</span>
                <span className="mx-2">•</span>
                <span>{item.time}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
