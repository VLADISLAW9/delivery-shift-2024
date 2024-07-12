import type { AppRoutesProps } from '@appTypes/common/appRoutesProps.ts';
import {
  AppRoutes,
  getRouteAuth,
  getRouteCreateOrder,
  getRouteMain,
  getRouteOrderDetails,
  getRouteOrders,
  getRouteProfile
} from '@consts/router';
import { AuthPage } from '@pages/AuthPage';
import { CreateOrderPage } from '@pages/CreateOrderPage';
import { MainPage } from '@pages/MainPage';
import { OrderDetailsPage } from '@pages/OrderDetailsPage';
import { OrdersListPage } from '@pages/OrdersListPage';
import { ProfilePage } from '@pages/ProfilePage';

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
    element: <OrdersListPage />,
    authOnly: true
  },
  [AppRoutes.ORDER_DETAILS]: {
    path: getRouteOrderDetails(':id'),
    element: <OrderDetailsPage />,
    authOnly: true
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(),
    element: <ProfilePage />,
    authOnly: true
  }
};
