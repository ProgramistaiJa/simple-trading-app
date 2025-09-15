import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-center text-gray-900">Welcome to Simple Trading App</h1>
        <p className="text-lg text-center text-gray-600">
          This is a simple trading application built with Next.js and Firebase. 
          It allows you to sign up, log in, and view a dashboard.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/login">
            <p className="px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Login</p>
          </Link>
          <Link href="/signup">
            <p className="px-6 py-2 text-indigo-600 bg-white border border-indigo-600 rounded-md hover:bg-gray-50">Sign Up</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
