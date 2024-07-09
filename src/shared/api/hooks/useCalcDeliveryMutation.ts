import type { CalcDeliveryParams } from '@api/requests/delivery/calc';
import { calcDelivery } from '@api/requests/delivery/calc';
import { useMutation } from '@tanstack/react-query';

export const useCalcDeliveryMutation = () =>
  useMutation({
    mutationKey: ['calcDelivery'],
    mutationFn: (params: CalcDeliveryParams) => calcDelivery({ params })
  });
