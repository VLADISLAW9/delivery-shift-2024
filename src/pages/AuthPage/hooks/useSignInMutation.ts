import { useMutation } from '@tanstack/react-query';

import { signIn } from '@/shared/api/requests/users';

interface SignInParams {
  phone: string;
  code: number;
}

export const useSignInMutation = () =>
  useMutation({
    mutationKey: ['signIn'],
    mutationFn: (params: SignInParams) => {
      return signIn({ params });
    }
  });
