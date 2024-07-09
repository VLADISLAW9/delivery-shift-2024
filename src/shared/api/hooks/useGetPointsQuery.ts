import { getPoints } from '@api/requests/delivery/points';
import { useQuery } from '@tanstack/react-query';

export const useGetPointsQuery = () =>
  useQuery({
    queryKey: ['getPoints'],
    queryFn: () => getPoints()
  });
