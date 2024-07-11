import type { Response } from '@appTypes/common';
import type { Options } from '@appTypes/option';
import type { Package } from '@appTypes/package';
import type { Point as _Point } from '@appTypes/point';

import { api } from '../../../instance.ts';

type Point = Omit<_Point, 'id' | 'name'>;

export interface CalcDeliveryParams {
  package: Omit<Package, 'id' | 'name'>;
  senderPoint: Point;
  receiverPoint: Point;
}
export type CalcDeliveryConfig = AxiosRequestConfig<CalcDeliveryParams>;

interface CalcDeliveryResponse extends Response {
  options: Options;
}

export const calcDelivery = async ({ params, config }: CalcDeliveryConfig) =>
  api.post<CalcDeliveryResponse>('/delivery/calc', params, config);
