''''use client';
import Link from "next/link";
import { useState } from "react";
import { BarChartIcon } from "@/components/Icons";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-light">
      <div className="w-full max-w-md p-8 space-y-6 bg-secondary rounded-lg shadow-md">
        <div className="text-center">
          <Link href="/" className="inline-block mb-4">
            <BarChartIcon className="w-10 h-10 text-accent" />
          </Link>
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="text-gray-400">to continue to our platform</p>
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
              className="block w-full px-3 py-2 mt-1 bg-primary border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
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
              className="block w-full px-3 py-2 mt-1 bg-primary border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
            />
          </div>
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
                href="#"
                className="font-medium text-accent hover:text-accent-dark"
              >
                Forgot your password?
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-accent border border-transparent rounded-md shadow-sm hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-gray-400">
          Don&apos;t have an account?{' '} 
          <Link
            href="/signup"
            className="font-medium text-accent hover:text-accent-dark"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
'''