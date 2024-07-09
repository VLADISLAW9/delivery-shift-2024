import { useMutation } from '@tanstack/react-query';

import type { CreateOtpParams } from '@/shared/api/requests/auth';
import { createOtp } from '@/shared/api/requests/auth';

export const useCreateOtpMutation = () =>
  useMutation({
    mutationKey: ['createOtp'],
    mutationFn: (params: CreateOtpParams) => createOtp({ params })
  });
