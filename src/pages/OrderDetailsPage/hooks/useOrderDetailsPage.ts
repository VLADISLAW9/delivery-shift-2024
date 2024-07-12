import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCancelOrderMutation } from '@api/hooks/useCancelOrderMutation.ts';
import { useGetOrdersIdQuery } from '@api/hooks/useGetOrdersIdQuery.ts';
import { getOrderDetailsItems } from '@components/OrderDetailsCard';
import { getRouteOrders } from '@consts/router.ts';
import { useQueryClient } from '@tanstack/react-query';

export const useOrderDetailsPage = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { id } = useParams();

  const getOrdersId = useGetOrdersIdQuery({ id });
  const cancelOrder = useCancelOrderMutation({
    options: { onSuccess: () => queryClient.invalidateQueries({ queryKey: ['getOrders'] }) }
  });

  const [error, setError] = useState('');

  const [openCancelOrderModal, setOpenCancelOrderModal] = useState(false);

  const { receiver, sender, senderAddress, receiverAddress } = getOrdersId.data?.data?.order ?? {};
  const orderDetailsItems = getOrderDetailsItems(receiver, sender, senderAddress, receiverAddress);

  const onOpenCancelOrderModal = () => {
    setOpenCancelOrderModal(true);
  };

  const onCloseCancelOrderModal = () => {
    setOpenCancelOrderModal(false);
  };

  const onCancelOrder = async () => {
    setError('');

    const cancelOrderResponse = await cancelOrder.mutateAsync({ params: { orderId: id } });

    if (!cancelOrderResponse?.data?.success && cancelOrderResponse?.data?.reason) {
      return setError(cancelOrderResponse.data.reason);
    }

    if (cancelOrderResponse?.data?.error || cancelOrderResponse?.data?.message) {
      return setError(cancelOrderResponse?.data?.message ?? 'Произошла ошибка');
    }

    setOpenCancelOrderModal(false);
    navigate(getRouteOrders());
  };

  const onCloseOrderDetailsPage = () => {
    navigate(getRouteOrders());
  };

  useEffect(() => {
    if (getOrdersId.data) {
      console.log(getOrdersId.data);
    }
  }, [getOrdersId.data]);

  return {
    state: {
      openCancelOrderModal,
      orderDetailsItems,
      error,
      loading: {
        getOrdersId: getOrdersId.isLoading,
        cancelOrder: cancelOrder.isPending
      }
    },
    functions: {
      onOpenCancelOrderModal,
      onCancelOrder,
      onCloseCancelOrderModal,
      onCloseOrderDetailsPage
    }
  };
};
