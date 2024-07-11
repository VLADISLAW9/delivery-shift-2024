import type { Response } from '@appTypes/common';

import { api } from '../../instance.ts';

export interface CreateOtpParams {
  phone: string;
}
export type CreateOtpConfig = AxiosRequestConfig<CreateOtpParams>;

interface CreateOtpResponse extends Response {
  retryDelay: number;
}

export const createOtp = async ({ params, config }: CreateOtpConfig) =>
  api.post<CreateOtpResponse>('/auth/otp', params, config);
