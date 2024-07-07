import type { AppRoutesProps } from '@appTypes/common/appRoutesProps.ts';
import { AppRoutes, getRouteAuth, getRouteMain } from '@consts/router.ts';
import { AuthPage } from '@pages/AuthPage';
import { MainPage } from '@pages/MainPage';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.AUTH]: {
    path: getRouteAuth(),
    element: <AuthPage />
  },
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />
  }
};
