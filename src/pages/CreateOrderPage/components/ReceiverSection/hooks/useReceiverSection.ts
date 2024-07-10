import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateOrderStore } from '@store/hooks/useCreateOrderStore.ts';

import type { ReceiverSectionSchema } from '../consts/receiverSectionSchema.ts';
import { receiverSectionSchema } from '../consts/receiverSectionSchema.ts';

export const useReceiverSection = () => {
  const { setSection, setReceiver } = useCreateOrderStore();

  const form = useForm<ReceiverSectionSchema>({
    resolver: zodResolver(receiverSectionSchema)
  });

  const onSubmit = form.handleSubmit((data: ReceiverSectionSchema) => {
    setReceiver(data);
  });

  const onComeback = () => {
    setSection('option');
  };

  return {
    form,
    state: {
      loading: form.formState.isSubmitting
    },
    functions: {
      onSubmit,
      onComeback
    }
  };
};
