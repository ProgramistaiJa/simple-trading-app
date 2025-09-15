'use client';

import { useRouter } from 'next/navigation';
import { ArrowRight, BarChart, DollarSign, Zap } from 'lucide-react';

const LandingPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">Welcome to the Future of Trading</h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">A simple, intuitive, and powerful trading app to help you stay ahead of the market.</p>
        <button 
          onClick={() => router.push('/dashboard')} 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-transform transform hover:scale-105 shadow-lg"
        >
          Get Started <ArrowRight className="inline-block ml-2" />
        </button>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-lg">
              <div className="p-4 bg-blue-600 rounded-full mb-4">
                <BarChart size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Charting</h3>
              <p className="text-gray-400">Visualize market trends with our advanced and easy-to-use charting tools.</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-lg">
              <div className="p-4 bg-green-600 rounded-full mb-4">
                <DollarSign size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Portfolio Management</h3>
              <p className="text-gray-400">Track your investments and manage your portfolio with ease and precision.</p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-lg">
              <div className="p-4 bg-yellow-600 rounded-full mb-4">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Data</h3>
              <p className="text-gray-400">Get access to real-time market data to make informed and timely decisions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
