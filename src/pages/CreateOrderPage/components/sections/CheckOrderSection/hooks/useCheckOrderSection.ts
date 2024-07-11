import { useCreateOrderStore } from '@store/hooks/useCreateOrderStore';

import { getOrderDataItems } from '../selectors/getOrderDataItems.ts';

export const useCheckOrderSection = () => {
  const {
    sender,
    senderAddress,
    receiverAddress,
    receiverPoint,
    receiver,
    option,
    payer,
    senderPoint
  } = useCreateOrderStore();

  const orderDataItems = getOrderDataItems();

  const onSendForm = () => {};

  return {
    state: {
      orderDataItems
    }
  };
};
