import type { GetOrderParams } from '@api/requests/delivery/orders/id';
import { getOrdersId } from '@api/requests/delivery/orders/id';
import { useQuery } from '@tanstack/react-query';

export const useGetOrdersIdQuery = (params: GetOrderParams) =>
  useQuery({
    queryKey: ['getOrdersId', params],
    queryFn: () => getOrdersId({ params })
  });
