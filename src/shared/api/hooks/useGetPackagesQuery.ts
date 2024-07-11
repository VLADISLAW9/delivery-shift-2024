import { getPackages } from '@api/requests/delivery/package/types';
import { useQuery } from '@tanstack/react-query';

export const useGetPackagesQuery = () =>
  useQuery({
    queryKey: ['getPackages'],
    queryFn: () => getPackages()
  });
