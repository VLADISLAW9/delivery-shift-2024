import type { Address } from '@appTypes/address';
import type { Options } from '@appTypes/option';
import type { Point } from '@appTypes/point';
import type { User as _User } from '@appTypes/user';

type User = Omit<_User, 'id' | 'email' | 'city'>;

export interface Order {
  _id: string;
  senderPoint: Point;
  senderAddress: Address;
  sender: User;
  receiverPoint: Point;
  receiverAddress: Address;
  receiver: User;
  payer: 'SENDER' | 'RECEIVER';
  option: Options;
  status: 0;
  cancellable: true;
}
