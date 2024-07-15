import type { Address } from '@appTypes/address.ts';
import type { Options } from '@appTypes/option';
import type { Order } from '@appTypes/order.ts';
import type { Point } from '@appTypes/point';
import type { User as _User } from '@appTypes/user.ts';

import { api } from '../../../instance.ts';

type User = Omit<_User, 'id' | 'email' | 'city'>;

export interface CreateOrderParams {
  senderPoint: Point;
  senderAddress: Address;
  sender: User;
  receiverPoint: Point;
  receiverAddress: Address;
  receiver: User;
  payer: 'SENDER' | 'RECEIVER';
  option: Options;
}

export type CreateOrderConfig = RequestConfig<CreateOrderParams>;

interface CreateOrderResponse extends BaseResponse {
  order: Order;
}

export const createOrder = async ({ params, config }: CreateOrderConfig) =>
  api.post<CreateOrderResponse>('/delivery/order', params, config);
