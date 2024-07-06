import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AUTH_KEY } from '@consts/localstorage';
import { zodResolver } from '@hookform/resolvers/zod';

import { useCreateOtpMutation, useSignInMutation } from '@/shared/api/hooks';

import type { OtpCodeSchema } from '../consts/otpCodeSchema';
import { otpCodeSchema } from '../consts/otpCodeSchema';
import type { PhoneSchema } from '../consts/phoneSchema';
import { phoneSchema } from '../consts/phoneSchema';

export const useAuthPage = () => {
  const navigate = useNavigate();

  const createOtpMutation = useCreateOtpMutation();
  const signInMutation = useSignInMutation();

  const [submittedPhones, setSubmittedPhones] = useState<{
    [key: string]: number;
  }>({});

  const [stage, setStage] = useState<'phone' | 'opt'>('phone');

  const form = useForm<OtpCodeSchema | PhoneSchema>({
    resolver: zodResolver(stage === 'phone' ? phoneSchema : otpCodeSchema)
  });

  const currentPhone = form.watch('phone');

  const handleCreateOtp = async (data?: PhoneSchema) => {
    const phone = data?.phone || currentPhone;
    const createOtpCodeResponse = await createOtpMutation.mutateAsync({ phone });

    setSubmittedPhones({
      ...submittedPhones,
      [phone]: Date.now() + createOtpCodeResponse.data.retryDelay
    });

    setStage('OTP');
  };

  const handleSignIn = async (data: OtpCodeSchema) => {
    const signInResponse = await signInMutation.mutateAsync({
      phone: currentPhone,
      code: data.otpCode
    });

    if (!signInResponse.data.success && signInResponse.data.reason) {
      return form.setError('otpCode', { message: signInResponse.data.reason });
    }

    localStorage.setItem(AUTH_KEY, signInResponse.data.token);

    navigate('/');
  };

  const onSubmit = form.handleSubmit((data: PhoneSchema | OtpCodeSchema) => {
    if (stage === 'phone') {
      handleCreateOtp(data as PhoneSchema);
    }

    if (stage === 'otp') {
      handleSignIn(data as OtpCodeSchema);
    }
  });

  return {
    form,
    state: {
      isSubmiting: createOtpMutation.isPending || signInMutation.isPending,
      stage,
      currentPhone,
      submittedPhones
    },
    functions: { onSubmit, handleCreateOtp }
  };
};
