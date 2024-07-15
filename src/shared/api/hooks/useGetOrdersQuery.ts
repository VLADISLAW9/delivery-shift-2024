import { getOrders } from '@api/requests/delivery/orders';
import { useQuery } from '@tanstack/react-query';

export const useGetOrdersQuery = (settings?: QuerySettings<typeof getOrders>) =>
  useQuery({
    queryKey: ['getOrders', settings?.config],
    queryFn: () => getOrders({ config: settings?.config }),
    ...settings?.options
  });
