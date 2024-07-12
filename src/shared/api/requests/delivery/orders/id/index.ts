import type { Order } from '@appTypes/order.ts';

import { api } from '../../../../instance.ts';

export interface GetOrderParams {
  id: string;
}
export type GetOrderConfig = AxiosRequestConfig<GetOrderParams>;

interface GetOrderResponse extends Response {
  order: Order;
}

export const getOrdersId = async ({ params, config }: GetOrderConfig) =>
  api.get<GetOrderResponse>(`/delivery/orders/${params.id}`, config);
