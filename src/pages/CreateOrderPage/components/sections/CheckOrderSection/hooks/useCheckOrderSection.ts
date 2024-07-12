import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateOrderMutation } from '@api/hooks/useCreateOrderMutation.ts';
import { getOrderDetailsItems } from '@components/OrderDetailsCard';
import { useCreateOrderStore } from '@store/hooks/useCreateOrderStore';

export const useCheckOrderSection = () => {
  const navigate = useNavigate();

  const {
    sender,
    senderAddress,
    receiverAddress,
    receiverPoint,
    receiver,
    option,
    payer,
    senderPoint,
    setSection,
    clearOrderStore
  } = useCreateOrderStore();

  const createOrder = useCreateOrderMutation();

  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState('');

  const orderDetailsItems = getOrderDetailsItems(receiver, sender, senderAddress, receiverAddress);

  const onSubmitOrderData = async () => {
    setError('');

    const createOrderResponse = await createOrder.mutateAsync({
      senderPoint,
      option,
      payer,
      receiverPoint,
      receiver,
      senderAddress,
      receiverAddress,
      sender
    });

    if (!createOrderResponse.data.success && createOrderResponse.data.reason) {
      return setError(createOrderResponse.data.reason);
    }

    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
    navigate('/');
    clearOrderStore();
  };

  const onComeback = () => {
    setSection('payer');
  };

  return {
    state: {
      orderDetailsItems,
      option,
      loading: createOrder.isPending,
      error,
      openModal
    },
    functions: {
      onSubmitOrderData,
      onComeback,
      onCloseModal
    }
  };
};
