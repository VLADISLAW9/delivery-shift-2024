import { useMutation } from '@tanstack/react-query';

import { createOtp } from '@/shared/api/requests/auth';

interface CreateOtpParams {
  phone: string;
}

export const useCreateOtpMutation = () =>
  useMutation({
    mutationKey: ['createOtp'],
    mutationFn: (params: CreateOtpParams) => createOtp({ params })
  });
