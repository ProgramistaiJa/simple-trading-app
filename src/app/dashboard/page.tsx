'use client';

import { useAuth } from "@/app/AuthContext";
import { useRouter } from "next/navigation";
import PortfolioSummary from "@/components/dashboard/PortfolioSummary";
import Watchlist from "@/components/dashboard/Watchlist";
import TopMovers from "@/components/dashboard/TopMovers";
import NewsFeed from "@/components/dashboard/NewsFeed";

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-primary text-light p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <PortfolioSummary />
          <NewsFeed />
        </div>
        <div className="space-y-6">
          <Watchlist />
          <TopMovers />
        </div>
      </div>
    </div>
  );
}
