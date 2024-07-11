import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUserStore } from '@store/hooks/useUserStore.ts';

import { getRouteAuth } from '@/shared/consts/router';

interface RequireAuthProps {
  children: ReactNode;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const { isLoggedIn } = useUserStore();
  const location = useLocation();

  console.log(isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to={getRouteAuth()} state={{ from: location }} replace />;
  }

  return children;
};
