import type { Response } from '@appTypes/common';
import type { Point } from '@appTypes/point';

import { api } from '../../../instance';

type GetPointsConfig = AxiosRequestConfig;

interface GetPointsResponse extends Response {
  points: Point[];
}

export const getPoints = async (requestConfig?: GetPointsConfig) =>
  api.get<GetPointsResponse>('/delivery/points', requestConfig);
