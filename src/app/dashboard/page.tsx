'use client';

import { useAuth } from "@/app/AuthContext";
import { useRouter } from "next/navigation";
import PortfolioSummary from "@/components/dashboard/PortfolioSummary";
import Watchlist from "@/components/dashboard/Watchlist";
import TopMovers from "@/components/dashboard/TopMovers";
import NewsFeed from "@/components/dashboard/NewsFeed";
import Header from "@/components/Header";

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-200">Your Dashboard</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <PortfolioSummary />
            <NewsFeed />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Watchlist />
            <TopMovers />
          </div>
        </div>
      </main>
    </div>
  );
}
