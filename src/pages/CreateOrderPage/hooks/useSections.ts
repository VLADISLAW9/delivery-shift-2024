import type { AddressSectionSchema } from '@pages/CreateOrderPage/consts/addressSectionSchema.ts';
import type { UserSectionSchema } from '@pages/CreateOrderPage/consts/userSectionSchema.ts';
import { useCurrentForm } from '@pages/CreateOrderPage/hooks/useCurrentForm.ts';
import type { Section } from '@store/hooks/useCreateOrderStore';
import { useCreateOrderStore } from '@store/hooks/useCreateOrderStore/useCreateOrderStore.ts';

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
      return setPayer(data);
    }
  });

  const onComeback = () => {
    if (section === 'sender') {
      return setSection('receiver');
    }

    if (section === 'receiver') {
      return setSection('option');
    }

    if (section === 'senderAddress') {
      return setSection('receiverAddress');
    }

    if (section === 'receiverAddress') {
      return setSection('sender');
    }

    if (section === 'payer') {
      return setSection('senderAddress');
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
