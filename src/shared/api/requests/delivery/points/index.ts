import type { Point } from '@appTypes/point';

import { api } from '../../../instance';

type GetPointsConfig = RequestConfig;

interface GetPointsResponse extends BaseResponse {
  points: Point[];
}

export const getPoints = async (requestConfig?: GetPointsConfig) =>
  api.get<GetPointsResponse>('/delivery/points', requestConfig);
