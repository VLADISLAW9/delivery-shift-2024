import { getOrders } from '@api/requests/delivery/orders';
import { useQuery } from '@tanstack/react-query';

export const useGetOrdersQuery = () =>
  useQuery({
    queryKey: ['getOrders'],
    queryFn: () => getOrders()
  });
