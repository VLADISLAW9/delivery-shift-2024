import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { getRouteAuth } from '@/shared/consts/router';

interface RequireAuthProps {
  children: ReactNode;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const isUserInited = false;
  const location = useLocation();

  if (!isUserInited) {
    return <Navigate to={getRouteAuth()} state={{ from: location }} replace />;
  }

  return children;
};
