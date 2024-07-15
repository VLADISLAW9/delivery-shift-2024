import type { GetOrderParams } from '@api/requests/delivery/orders/id';
import { getOrdersId } from '@api/requests/delivery/orders/id';
import { useQuery } from '@tanstack/react-query';

export const useGetOrdersIdQuery = (settings?: QuerySettings<GetOrderParams>) =>
  useQuery({
    queryKey: ['getOrdersId', settings?.config, settings?.config?.params],
    queryFn: () => getOrdersId({ config: settings?.config, params: settings?.config?.params }),
    ...settings?.options
  });
