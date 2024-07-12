import type { CancelOrderParams } from '@api/requests/delivery/orders';
import { cancelOrder } from '@api/requests/delivery/orders';
import { useMutation } from '@tanstack/react-query';

import { createOtp } from '@/shared/api/requests/auth';

export const useCancelOrderMutation = (settings?: MutationSettings) =>
  useMutation({
    mutationKey: ['createOtp'],
    mutationFn: (params: CancelOrderParams) => cancelOrder({ params })
  });
