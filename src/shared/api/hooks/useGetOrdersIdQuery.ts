import { getOrdersId } from '@api/requests/delivery/orders/id';
import { useQuery } from '@tanstack/react-query';

export const useGetOrdersIdQuery = (settings?: QuerySettings<typeof getOrdersId>) =>
  useQuery({
    queryKey: ['getOrdersId'],
    queryFn: () => getOrdersId({ config: settings?.config }),
    ...settings?.options
  });
