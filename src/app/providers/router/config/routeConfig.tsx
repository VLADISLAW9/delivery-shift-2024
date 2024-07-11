import type { AppRoutesProps } from '@appTypes/common/appRoutesProps.ts';
import {
  AppRoutes,
  getRouteAuth,
  getRouteCreateOrder,
  getRouteMain,
  getRouteOrders
} from '@consts/router';
import { AuthPage } from '@pages/AuthPage';
import { CreateOrderPage } from '@pages/CreateOrderPage';
import { MainPage } from '@pages/MainPage';
import { OrdersListPage } from '@pages/OrdersListPage';

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
  [AppRoutes.ORDERS]: {
    path: getRouteOrders(),
    element: <OrdersListPage />
  }
};
