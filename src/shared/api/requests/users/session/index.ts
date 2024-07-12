import type { User } from '@appTypes/user';

import { api } from '../../../instance';

type GetSessionConfig = RequestConfig;

interface GetSessionResponse extends BaseResponse {
  user: User;
}

export const getSession = async (requestConfig?: GetSessionConfig) =>
  api.get<GetSessionResponse>('/users/session', requestConfig);
