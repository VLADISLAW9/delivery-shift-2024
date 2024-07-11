import { AUTH_TOKEN } from '@consts/localstorage.ts';
import { useQuery } from '@tanstack/react-query';

import { getSession } from '@/shared/api/requests';

export const useGetSessionQuery = () =>
  useQuery({
    queryKey: ['getSession'],
    queryFn: () => {
      const token = localStorage.getItem(AUTH_TOKEN);

      if (!token) {
        throw new Error('No token');
      }

      return getSession();
    }
  });
