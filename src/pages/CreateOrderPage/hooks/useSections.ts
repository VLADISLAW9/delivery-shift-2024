import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { AddressSectionSchema } from '@pages/CreateOrderPage/consts/addressSectionSchema.ts';
import { addressSectionSchema } from '@pages/CreateOrderPage/consts/addressSectionSchema.ts';
import { useCreateOrderStore } from '@store/hooks/useCreateOrderStore.ts';

import type { UserSectionSchema } from '../consts/userSectionSchema.ts';
import { userSectionSchema } from '../consts/userSectionSchema.ts';
import type { Role } from '../types/role.ts';
import type { Type } from '../types/type.ts';

interface Section {
  type: Type;
  role: Role;
}

export const useSections = ({ type, role }: Section) => {
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
    defaultValues: role === 'sender' ? { ...sender } : { ...receiver }
  });

  const addressForm = useForm<AddressSectionSchema>({
    resolver: zodResolver(addressSectionSchema),
    defaultValues: role === 'sender' ? { ...senderAddress } : { ...receiverAddress }
  });

  const form = type === 'user' ? userForm : addressForm;

  const onSubmit = form.handleSubmit((data: UserSectionSchema) => {
    if (type === 'user') {
      if (role === 'sender') {
        return setSender(data);
      }
      return setReceiver(data);
    }

    if (type === 'address') {
      if (role === 'sender') {
        return setSenderAddress(data);
      }
      return setReceiverAddress(data);
    }
  });

  const onComeback = () => {
    if (type === 'user') {
      if (role === 'sender') {
        return setSection('receiver');
      }
      return setSection('option');
    }

    if (type === 'address') {
      if (role === 'sender') {
        return setSection('receiverAddress');
      }
      return setSection('sender');
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
