import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-2xl p-8 space-y-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white">Welcome to Simple Trading App</h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300">
          This is a simple trading application built with Next.js and Firebase. 
          It allows you to sign up, log in, and view a dashboard.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/login">
            <p className="px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Login</p>
          </Link>
          <Link href="/signup">
            <p className="px-6 py-2 text-indigo-600 bg-white border border-indigo-600 rounded-md hover:bg-gray-50 dark:bg-transparent dark:text-white dark:border-white dark:hover:bg-gray-700">Sign Up</p>
          </Link>
          <Link href="/settings">
            <p className="px-6 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-700">Settings</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
