'use client';

import { useAuth } from '../AuthContext';
import PrivateRoute from '../PrivateRoute';
import { auth } from '../firebase';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await auth.signOut();
    router.push('/');
  };

  return (
    <PrivateRoute>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center text-gray-900">
            Welcome, {user?.email}
          </h1>
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Logout
          </button>
        </div>
      </div>
    </PrivateRoute>
  );
}
