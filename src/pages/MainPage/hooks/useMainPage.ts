import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useCalcDeliveryMutation } from '@api/hooks/useCalcDeliveryMutation';
import { useGetPackagesQuery } from '@api/hooks/useGetPackagesQuery';
import { useGetPointsQuery } from '@api/hooks/useGetPointsQuery';
import { getRouteCreateOrder } from '@consts/router.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateOrderStore } from '@store/hooks/useCreateOrderStore';

import type { CalcDeliverySchema } from '../consts/calcDeliverySchema';
import { calcDeliverySchema } from '../consts/calcDeliverySchema';

export const useMainPage = () => {
  const navigate = useNavigate();

  const getPointsQuery = useGetPointsQuery();
  const getPackagesQuery = useGetPackagesQuery();
  const calcDelivery = useCalcDeliveryMutation();

  const { setOptions, setSenderPoint, setReceiverPoint } = useCreateOrderStore();

  const [error, setError] = useState('');

  const points = getPointsQuery.data ? getPointsQuery.data.data.points : [];
  const packages = getPackagesQuery.data ? getPackagesQuery.data.data.packages : [];

  const form = useForm<CalcDeliverySchema>({
    resolver: zodResolver(calcDeliverySchema),
    defaultValues: {
      receiverPoint: points[0]?.id || '1',
      senderPoint: points[0]?.id || '1',
      package: packages[0]?.id || '1'
    }
  });

  const onSubmit = form.handleSubmit(async (data: CalcDeliverySchema) => {
    setError('');

    const params = {
      receiverPoint: points.find((p) => p.id === data.receiverPoint),
      senderPoint: points.find((p) => p.id === data.senderPoint),
      package: packages.find((p) => p.id === data.package)
    };

    const calcDeliveryResponse = await calcDelivery.mutateAsync({ params });

    if (!calcDeliveryResponse.data.success && calcDeliveryResponse.data.reason) {
      setError(calcDeliveryResponse.data.reason);
    }

    setOptions(calcDeliveryResponse.data.options);
    setReceiverPoint(params.receiverPoint);
    setSenderPoint(params.senderPoint);

    navigate(getRouteCreateOrder());
  });

  return {
    state: {
      error,
      points,
      packages,
      loading: {
        getSelectItems: getPointsQuery.isPending || getPackagesQuery.isPending,
        submitForm: form.formState.isSubmitting
      }
    },
    form,
    functions: { onSubmit }
  };
};
