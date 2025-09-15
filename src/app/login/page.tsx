'use client';
import Link from "next/link";
import { useState } from "react";
import { BarChartIcon } from "@/components/Icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-light">
      <div className="w-full max-w-md p-8 space-y-6 bg-secondary rounded-lg shadow-2xl">
        <div className="text-center">
          <Link href="/" className="inline-block mb-4">
            <BarChartIcon className="w-12 h-12 text-accent" />
          </Link>
          <h1 className="text-4xl font-bold">Sign In</h1>
          <p className="text-gray-400">Welcome back!</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-3 mt-1 bg-primary border-2 border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent sm:text-sm transition duration-300"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-3 mt-1 bg-primary border-2 border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent sm:text-sm transition duration-300"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 rounded text-accent border-gray-600 focus:ring-accent"
              />
              <label
                htmlFor="remember-me"
                className="block ml-2 text-sm text-gray-300"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link
                href="/forgot-password"
                className="font-medium text-accent hover:text-accent-dark transition duration-300"
              >
                Forgot your password?
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className="flex justify-center w-full px-4 py-3 text-sm font-bold text-primary bg-accent border border-transparent rounded-lg shadow-lg hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-dark disabled:opacity-50 transition duration-300 transform hover:scale-105"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-gray-400">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-accent hover:text-accent-dark transition duration-300"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
