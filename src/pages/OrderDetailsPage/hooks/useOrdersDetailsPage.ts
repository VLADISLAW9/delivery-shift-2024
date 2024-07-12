import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCancelOrderMutation } from '@api/hooks/useCancelOrderMutation.ts';
import { useGetOrdersIdQuery } from '@api/hooks/useGetOrdersIdQuery.ts';
import { getOrderDetailsItems } from '@components/OrderDetailsCard';
import { getRouteOrders } from '@consts/router.ts';
import { useQueryClient } from '@tanstack/react-query';

export const useOrdersDetailsPage = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { id } = useParams();

  const getOrdersId = useGetOrdersIdQuery(id);
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

    const cancelOrderResponse = await cancelOrder.mutateAsync({
      orderId: id
    });

    console.log(cancelOrderResponse?.data);

    if (!cancelOrderResponse?.data?.success && cancelOrderResponse?.data?.reason) {
      return setError(cancelOrderResponse.data.reason);
    }

    setOpenCancelOrderModal(false);
    navigate(getRouteOrders());
  };

  const onCloseOrderDetailsPage = () => {
    navigate(getRouteOrders());
  };

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
