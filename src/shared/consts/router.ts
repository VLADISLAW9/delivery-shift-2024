export enum AppRoutes {
  MAIN = 'main',
  AUTH = 'auth',
  CREATE_ORDER = 'create-order',
  ORDERS = 'orders',
  ORDER_DETAILS = 'order-details'
}

export const getRouteMain = () => '/';
export const getRouteAuth = () => '/auth';
export const getRouteCreateOrder = () => '/create-order';
export const getRouteOrders = () => '/orders';
export const getRouteOrderDetails = (id: string) => `/orders/${id}`;
