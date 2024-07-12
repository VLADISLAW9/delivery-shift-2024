import { getOrdersId } from '@api/requests/delivery/orders/id';
import { useQuery } from '@tanstack/react-query';

export const useGetOrdersIdQuery = (id: string) =>
  useQuery({
    queryKey: ['getOrdersId'],
    queryFn: () => getOrdersId({ params: { id } })
  });
