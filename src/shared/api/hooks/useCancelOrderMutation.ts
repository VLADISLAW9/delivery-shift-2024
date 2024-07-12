import type { CancelOrderConfig } from '@api/requests/delivery/orders';
import { cancelOrder } from '@api/requests/delivery/orders';
import { useMutation } from '@tanstack/react-query';

export const useCancelOrderMutation = (
  settings?: MutationSettings<CancelOrderConfig, typeof cancelOrder>
) =>
  useMutation({
    mutationKey: ['createOtp'],
    mutationFn: ({ params, config }: CancelOrderConfig) =>
      cancelOrder({ params, config: settings?.config, ...config }),
    ...settings?.options
  });
