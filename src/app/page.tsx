import Link from "next/link";
import { SVGProps } from "react";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-primary text-light">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-secondary shadow-lg">
        <Link className="flex items-center justify-center" href="#">
          <TrendingUpIcon className="h-6 w-6 text-accent" />
          <span className="sr-only">Financial App</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-accent transition-colors duration-300"
            href="/dashboard"
          >
            Dashboard
          </Link>
          <Link
            className="text-sm font-medium hover:text-accent transition-colors duration-300"
            href="/trade"
          >
            Trade
          </Link>
          <Link
            className="text-sm font-medium hover:text-accent transition-colors duration-300"
            href="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="text-sm font-medium hover:text-accent transition-colors duration-300"
            href="/account"
          >
            Account
          </Link>
          <Link
            className="text-sm font-medium bg-accent text-primary px-4 py-2 rounded-md hover:bg-accent-dark transition-all duration-300 transform hover:scale-105"
            href="/login"
          >
            Login
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-24 md:py-32 lg:py-40 xl:py-56 bg-gradient-to-br from-primary to-secondary text-light">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl/none bg-clip-text text-transparent bg-gradient-to-r from-accent to-light">
                  Modernize Your Trading Experience
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  A sleek, intuitive, and powerful platform for all your
                  financial needs.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-accent px-10 text-lg font-bold text-primary shadow-lg transition-all duration-300 hover:bg-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-dark disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105"
                  href="/signup"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary text-light">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-700 px-3 py-1 text-sm">
                  Key Features
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                  Trade with Confidence
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers a suite of powerful features designed to
                  help you make informed decisions and stay ahead of the
                  market.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-3 lg:gap-12">
                <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-lg bg-primary shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <ShieldCheckIcon className="h-12 w-12 text-accent" />
                    <h3 className="text-xl font-bold">Secure Wallet</h3>
                    <p className="text-gray-400">
                        Your assets are protected with our multi-layered security.
                    </p>
                </div>
                <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-lg bg-primary shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <TrendingUpIcon className="h-12 w-12 text-accent" />
                    <h3 className="text-xl font-bold">Real-Time Data</h3>
                    <p className="text-gray-400">
                        Access up-to-the-minute market data and news.
                    </p>
                </div>
                <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-lg bg-primary shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <BarChartIcon className="h-12 w-12 text-accent" />
                    <h3 className="text-xl font-bold">Advanced Charting</h3>
                    <p className="text-gray-400">
                        Utilize our comprehensive charting tools to analyze market trends.
                    </p>
                </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-light">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-4xl font-bold tracking-tighter md:text-5xl/tight">
                Start Your Financial Journey Today
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sign up for a free account and experience the future of
                trading.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Link
                className="inline-flex h-12 items-center justify-center rounded-lg bg-accent px-10 text-lg font-bold text-primary shadow-lg transition-all duration-300 hover:bg-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-dark disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105"
                href="/signup"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700 bg-secondary text-light">
        <p className="text-xs text-gray-400">
          © 2024 Financial App. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function BarChartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function TrendingUpIcon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    );
  }

  function ShieldCheckIcon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }
