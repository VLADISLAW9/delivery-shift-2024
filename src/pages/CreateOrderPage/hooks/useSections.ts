import { useCurrentForm } from '@pages/CreateOrderPage/hooks/useCurrentForm.ts';
import type { Section } from '@store/hooks/useCreateOrderStore';
import { useCreateOrderStore } from '@store/hooks/useCreateOrderStore/useCreateOrderStore.ts';

import type { AddressSectionSchema } from '../consts/addressSectionSchema.ts';
import type { UserSectionSchema } from '../consts/userSectionSchema.ts';

export const useSections = (section: Section) => {
  const { setSection, setReceiverAddress, setPayer, setSenderAddress, setSender, setReceiver } =
    useCreateOrderStore();

  const form = useCurrentForm(section);

  const onSubmit = form.handleSubmit((data: UserSectionSchema | AddressSectionSchema) => {
    if (section === 'sender') {
      return setSender(data);
    }

    if (section === 'receiver') {
      return setReceiver(data);
    }

    if (section === 'senderAddress') {
      return setSenderAddress(data);
    }

    if (section === 'receiverAddress') {
      return setReceiverAddress(data);
    }

    if (section === 'payer') {
      console.log(data);
      return setPayer(data);
    }
  });

  const onComeback = () => {
    if (section === 'sender') {
      return setSection('receiverAddress');
    }

    if (section === 'receiver') {
      return setSection('sender');
    }

    if (section === 'senderAddress') {
      return setSection('payer');
    }

    if (section === 'receiverAddress') {
      return setSection('senderAddress');
    }

    if (section === 'payer') {
      return setSection('receiver');
    }
  };

  return {
    form,
    functions: {
      onSubmit,
      onComeback
    }
  };
};
