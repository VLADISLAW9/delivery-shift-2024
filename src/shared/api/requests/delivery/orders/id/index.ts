import type { Order } from '@appTypes/order.ts';

import { api } from '../../../../instance.ts';

export interface GetOrderParams {
  id: string;
}
export type GetOrderConfig = RequestConfig<GetOrderParams>;

interface GetOrderResponse extends BaseResponse {
  order: Order;
}

export const getOrdersId = async ({ config, params }: GetOrderConfig) =>
  api.get<GetOrderResponse>(`/delivery/orders/${params.id}`, config);
