import { getPoints } from '@api/requests/delivery/points';
import { useQuery } from '@tanstack/react-query';

export const useGetPointsQuery = (settings?: QuerySettings<typeof getPoints>) =>
  useQuery({
    queryKey: ['getPoints', settings?.config],
    queryFn: () => getPoints({ config: settings?.config }),
    ...settings?.options
  });
