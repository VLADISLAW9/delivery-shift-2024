import { api } from '../../instance.ts';

export interface SignInParams {
  phone: string;
}
export type SignInConfig = AxiosRequestConfig<SignInParams>;

interface SignInResponse extends Response {
  retryDelay: number;
}

export const signIn = async ({ params, config }: SignInConfig) =>
  api.post<SignInResponse>('/users/signin', params, config);
