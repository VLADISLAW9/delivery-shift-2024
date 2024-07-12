import { getPackages } from '@api/requests/delivery/package/types';
import { useQuery } from '@tanstack/react-query';

export const useGetPackagesQuery = (settings?: QuerySettings<typeof getPackages>) =>
  useQuery({
    queryKey: ['getPackages'],
    queryFn: () => getPackages({ config: settings?.config }),
    ...settings?.options
  });
