import type { getPoints } from '@api/requests/delivery/points';
import { getProfile } from '@api/requests/users/profile';
import { useQuery } from '@tanstack/react-query';

export const useGetProfileQuery = (settings?: QuerySettings<typeof getPoints>) =>
  useQuery({
    queryKey: ['getPoints'],
    queryFn: () => getProfile({ config: settings?.config }),
    ...settings?.options
  });
