'use client';

const news = [
  { id: 1, source: 'Bloomberg', title: 'Global markets rally on positive inflation data.', time: '2h ago' },
  { id: 2, source: 'Reuters', title: 'Tech stocks lead the way as investors eye AI developments.', time: '4h ago' },
  { id: 3, source: 'The Wall Street Journal', title: 'Federal Reserve holds interest rates steady.', time: '6h ago' },
  { id: 4, source: 'Financial Times', title: 'Oil prices fall on demand concerns.', time: '8h ago' },
];

export default function NewsFeed() {
  return (
    <div className="bg-secondary p-6 rounded-lg">
      <h2 className="text-lg font-medium text-gray-300 mb-4">News Feed</h2>
      <ul className="space-y-4">
        {news.map((item) => (
          <li key={item.id}>
            <p className="font-bold">{item.title}</p>
            <p className="text-sm text-gray-400">{item.source} - {item.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
