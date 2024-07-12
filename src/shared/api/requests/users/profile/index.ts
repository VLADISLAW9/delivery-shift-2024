import type { User } from '@appTypes/user';

import { api } from '../../../instance';

type GetProfileConfig = RequestConfig;

interface GetProfileResponse extends BaseResponse {
  user: User;
}

export const getProfile = async (requestConfig?: GetProfileConfig) =>
  api.get<GetProfileResponse>('/users/profile', requestConfig);
