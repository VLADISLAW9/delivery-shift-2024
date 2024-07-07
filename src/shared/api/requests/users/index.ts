import type { User } from '@appTypes/user.ts';

import { api } from '../../instance.ts';

interface SignInParams {
  phone: string;
}
type SignInConfig = AxiosRequestConfig<SignInParams>;

interface SignInResponse extends Response {
  retryDelay: number;
}

export const signIn = async ({ params, config }: SignInConfig) =>
  api.post<SignInResponse>('/users/signin', params, config);

type GetSessionConfig = AxiosRequestConfig;

interface GetSessionResponse extends Response {
  user: User;
}

export const getSession = async (requestConfig?: GetSessionConfig) =>
  api.get<GetSessionResponse>('/users/session', requestConfig);
