import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { AddressSectionSchema } from '@pages/CreateOrderPage/consts/addressSectionSchema.ts';
import { addressSectionSchema } from '@pages/CreateOrderPage/consts/addressSectionSchema.ts';
import type { Section } from '@store/hooks/useCreateOrderStore.ts';
import { useCreateOrderStore } from '@store/hooks/useCreateOrderStore.ts';

import type { UserSectionSchema } from '../consts/userSectionSchema.ts';
import { userSectionSchema } from '../consts/userSectionSchema.ts';

export const useSections = (section: Section) => {
  const {
    setSection,
    setReceiverAddress,
    setSenderAddress,
    setSender,
    setReceiver,
    sender,
    receiver,
    senderAddress,
    receiverAddress
  } = useCreateOrderStore();

  const userForm = useForm<UserSectionSchema>({
    resolver: zodResolver(userSectionSchema),
    defaultValues: section === 'sender' ? { ...sender } : { ...receiver }
  });

  const addressForm = useForm<AddressSectionSchema>({
    resolver: zodResolver(addressSectionSchema),
    defaultValues: section === 'senderAddress' ? { ...senderAddress } : { ...receiverAddress }
  });

  const isUserSection = section === 'sender' || section === 'receiver';

  const form = isUserSection ? userForm : addressForm;

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
  };

  return {
    form,
    functions: {
      onSubmit,
      onComeback
    }
  };
};
