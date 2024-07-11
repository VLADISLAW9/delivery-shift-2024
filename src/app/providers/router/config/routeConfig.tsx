import type { AppRoutesProps } from '@appTypes/common/appRoutesProps.ts';
import {
  AppRoutes,
  getRouteAuth,
  getRouteCreateOrder,
  getRouteHistoryOrders,
  getRouteMain
} from '@consts/router';
import { AuthPage } from '@pages/AuthPage';
import { CreateOrderPage } from '@pages/CreateOrderPage';
import { HistoryOrdersPage } from '@pages/HistoryOrdersPage';
import { MainPage } from '@pages/MainPage';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.AUTH]: {
    path: getRouteAuth(),
    element: <AuthPage />
  },
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />
  },
  [AppRoutes.CREATE_ORDER]: {
    path: getRouteCreateOrder(),
    element: <CreateOrderPage />,
    authOnly: true
  },
  [AppRoutes.HISTORY_ORDERS]: {
    path: getRouteHistoryOrders(),
    element: <HistoryOrdersPage />,
    authOnly: true
  }
};
