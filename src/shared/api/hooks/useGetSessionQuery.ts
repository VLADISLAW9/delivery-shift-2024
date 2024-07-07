import { useQuery } from '@tanstack/react-query';

import { getSession } from '@/shared/api/requests';

export const useGetSessionQuery = () =>
  useQuery({
    queryKey: ['getSession'],
    queryFn: () => getSession()
  });
