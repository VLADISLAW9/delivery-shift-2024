import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateOrderStore } from '@store/hooks/useCreateOrderStore.ts';

import type { UserSectionSchema } from '../consts/userSectionSchema.ts';
import { userSectionSchema } from '../consts/userSectionSchema.ts';

type User = 'sender' | 'receiver';

export const useUserSection = (user: User) => {
  const { setSection, setReceiver, setSender } = useCreateOrderStore();

  const form = useForm<UserSectionSchema>({
    resolver: zodResolver(userSectionSchema)
  });

  const onSubmit = form.handleSubmit((data: UserSectionSchema) => {
    if (user === 'sender') {
      return setSender(data);
    }
    setReceiver(data);
  });

  const onComeback = () => {
    if (user === 'receiver') {
      return setSection('option');
    }
    setSection('receiver');
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
