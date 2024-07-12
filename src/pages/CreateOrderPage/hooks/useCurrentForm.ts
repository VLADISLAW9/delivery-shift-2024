import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { AddressSectionSchema } from '@pages/CreateOrderPage/consts/addressSectionSchema.ts';
import { addressSectionSchema } from '@pages/CreateOrderPage/consts/addressSectionSchema.ts';
import type { PayerSectionSchema } from '@pages/CreateOrderPage/consts/payerSectionSchema.ts';
import { payerSectionSchema } from '@pages/CreateOrderPage/consts/payerSectionSchema.ts';
import type { UserSectionSchema } from '@pages/CreateOrderPage/consts/userSectionSchema.ts';
import { userSectionSchema } from '@pages/CreateOrderPage/consts/userSectionSchema.ts';
import type { Section } from '@store/hooks/useCreateOrderStore';
import { useCreateOrderStore } from '@store/hooks/useCreateOrderStore';

export const useCurrentForm = (section: Section) => {
  const { sender, receiver, payer, senderAddress, receiverAddress } = useCreateOrderStore();

  const userForm = useForm<UserSectionSchema>({
    resolver: zodResolver(userSectionSchema),
    defaultValues: section === 'sender' ? { ...sender } : { ...receiver }
  });

  const addressForm = useForm<AddressSectionSchema>({
    resolver: zodResolver(addressSectionSchema),
    defaultValues: section === 'senderAddress' ? { ...senderAddress } : { ...receiverAddress }
  });

  const payerForm = useForm<PayerSectionSchema>({
    resolver: zodResolver(payerSectionSchema),
    defaultValues: { payer: payer?.payer }
  });

  if (section === 'sender' || section === 'receiver') {
    return userForm;
  }
  if (section === 'senderAddress' || section === 'receiverAddress') {
    return addressForm;
  }
  return payerForm;
};
