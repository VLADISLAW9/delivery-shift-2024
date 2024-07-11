import type { Response } from '@appTypes/common';
import type { Order } from '@appTypes/order.ts';

import { api } from '../../../instance.ts';

type GetOrdersConfig = AxiosRequestConfig;

interface GetOrdersResponse extends Response {
  orders: Order[];
}

export const getOrders = async (requestConfig?: GetOrdersConfig) =>
  api.get<GetOrdersResponse>('/delivery/orders', requestConfig);
