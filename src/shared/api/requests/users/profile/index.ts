import type { User } from '@appTypes/user';

import { api } from '../../../instance';

export interface UpdateProfileParams {
  profile: Omit<User, 'id' | 'phone'>;
  phone: string;
}

export type UpdateProfileConfig = RequestConfig<UpdateProfileParams>;

interface UpdateProfileResponse extends BaseResponse {
  user: User;
}

export const updateProfile = async ({ params, config }?: UpdateProfileConfig) =>
  api.patch<UpdateProfileResponse>('/users/profile', params, config);
