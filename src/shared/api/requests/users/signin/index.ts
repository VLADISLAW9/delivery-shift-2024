import { api } from '../../../instance';

interface SignInParams {
  phone: string;
}

export type SignInConfig = RequestConfig<SignInParams>;

interface SignInResponse extends Response {
  retryDelay: number;
}

export const signIn = async ({ params, config }: SignInConfig) =>
  api.post<SignInResponse>('/users/signin', params, config);
