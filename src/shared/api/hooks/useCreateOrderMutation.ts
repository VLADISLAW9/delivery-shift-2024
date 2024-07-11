import type { CreateOrderParams } from '@api/requests/delivery/order';
import { createOrder } from '@api/requests/delivery/order';
import { useMutation } from '@tanstack/react-query';

export const useCreateOrderMutation = () =>
  useMutation({
    mutationKey: ['createOrder'],
    mutationFn: (params: CreateOrderParams) => createOrder({ params })
  });
