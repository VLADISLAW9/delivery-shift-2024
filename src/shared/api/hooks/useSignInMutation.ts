import type { SignInConfig } from '@api/requests/users/signin';
import { signIn } from '@api/requests/users/signin';
import { useMutation } from '@tanstack/react-query';

interface SignInParams {
  phone: string;
  code: number;
}

export const useSignInMutation = (settings?: MutationSettings<SignInConfig, typeof signIn>) =>
  useMutation({
    mutationKey: ['signIn'],
    mutationFn: ({ params, config }: SignInConfig) => signIn({ params })
  });
