'use client';

import { useAuth } from './AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, ReactNode } from 'react';

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
    }
  }, [user, loading, router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
};

export default PrivateRoute;
