import type { Order } from '@appTypes/order.ts';

import { api } from '../../../instance.ts';

type GetOrdersConfig = RequestConfig;

interface GetOrdersResponse extends Response {
  orders: Order[];
}

export const getOrders = async (requestConfig?: GetOrdersConfig) =>
  api.get<GetOrdersResponse>('/delivery/orders', requestConfig);

export interface CancelOrderParams {
  orderId: string;
}

export type CancelOrderConfig = RequestConfig<CancelOrderParams>;

type CancelOrderResponse = BaseResponse;

export const cancelOrder = async ({ params, config }: CancelOrderConfig) =>
  api.put<CancelOrderResponse>(`/delivery/orders/cancel`, params, config);
