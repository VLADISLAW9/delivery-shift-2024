import { api } from '../../instance.ts';

export interface OtpParams {
  phone: string;
}
export type OtpConfig = AxiosRequestConfig<OtpParams>;

interface OtpResponse extends Response {
  retryDelay: number;
}

export const otp = async ({ params, config }: OtpConfig) =>
  api.post<OtpResponse>('/auth/otp', params, config);
