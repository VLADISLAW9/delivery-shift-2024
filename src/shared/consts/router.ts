export enum AppRoutes {
  MAIN = 'main',
  AUTH = 'auth',
  CREATE_ORDER = 'create-order',
  HISTORY_ORDERS = 'history-orders'
}

export const getRouteMain = () => '/';
export const getRouteAuth = () => '/auth';
export const getRouteCreateOrder = () => '/create-order';
export const getRouteHistoryOrders = () => '/history-orders';
