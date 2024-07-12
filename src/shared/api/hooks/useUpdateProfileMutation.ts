import type { calcDelivery } from '@api/requests/delivery/calc';
import type { UpdateProfileConfig } from '@api/requests/users/profile';
import { updateProfile } from '@api/requests/users/profile';
import { useMutation } from '@tanstack/react-query';

export const useUpdateProfileMutation = (
  settings?: MutationSettings<UpdateProfileConfig, typeof calcDelivery>
) =>
  useMutation({
    mutationKey: ['updateProfile'],
    mutationFn: ({ params, config }: UpdateProfileConfig) =>
      updateProfile({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
