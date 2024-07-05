import { useMutation } from '@tanstack/react-query';

import { otp } from '@/shared/api/requests/auth';

interface CreateOtpParams {
  phone: string;
}

export const useCreateOtpMutation = () =>
  useMutation({
    mutationKey: ['createOtp'],
    mutationFn: (params: CreateOtpParams) => {
      return otp({ params });
    }
  });
