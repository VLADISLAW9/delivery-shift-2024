import { AUTH_TOKEN } from '@consts/localstorage.ts';
import { useQuery } from '@tanstack/react-query';

import { getSession } from '@/shared/api/requests/users/session';

export const useGetSessionQuery = (settings?: QuerySettings<typeof getSession>) =>
  useQuery({
    queryKey: ['getSession'],
    queryFn: () => {
      const token = localStorage.getItem(AUTH_TOKEN);

      if (!token) {
        throw new Error('No token');
      }

      return getSession({ config: settings?.config });
    },
    ...settings?.options
  });
