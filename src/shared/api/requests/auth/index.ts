import { api } from '../../instance.ts';

export interface OtpParams {
  phone: string;
}
export type CreateOtpConfig = AxiosRequestConfig<OtpParams>;

interface CreateOtpResponse extends Response {
  retryDelay: number;
}

export const createOtp = async ({ params, config }: CreateOtpConfig) =>
  api.post<CreateOtpResponse>('/auth/otp', params, config);
