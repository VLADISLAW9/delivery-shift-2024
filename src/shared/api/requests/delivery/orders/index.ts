import type { Response } from '@appTypes/common';
import type { Order } from '@appTypes/order.ts';

import { api } from '../../../instance.ts';

type GetOrdersConfig = AxiosRequestConfig;

interface GetOrdersResponse extends Response {
  orders: Order[];
}

export const getOrders = async (requestConfig?: GetOrdersConfig) =>
  api.get<GetOrdersResponse>('/delivery/orders', requestConfig);

export interface CancelOrderParams {
  orderId: string;
}

type CancelOrderConfig = AxiosRequestConfig<CancelOrderParams>;

type CancelOrderResponse = Response;

export const cancelOrder = async ({ params, config }: CancelOrderConfig) =>
  api.put<CancelOrderResponse>(`/delivery/orders/cancel`, params, config);
