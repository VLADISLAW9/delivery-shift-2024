import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { USER_LOCALSTORAGE_KEY } from '@consts/localstorage.ts';
import { getRouteMain } from '@consts/router.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import type { OtpCodeSchema } from '@pages/AuthPage/consts/OtpCodeSchema.ts';
import { otpCodeSchema } from '@pages/AuthPage/consts/OtpCodeSchema.ts';
import type { PhoneSchema } from '@pages/AuthPage/consts/PhoneSchema.ts';
import { phoneSchema } from '@pages/AuthPage/consts/PhoneSchema.ts';

import { useCreateOtpMutation } from './useCreateOtpCodeMutation.ts';
import { useSignInMutation } from './useSignInMutation.ts';

export const useAuthForm = () => {
  const navigate = useNavigate();

  const createOtpMutation = useCreateOtpMutation();
  const signInMutation = useSignInMutation();

  const [submittedPhones, setSubmittedPhones] = useState<{
    [key: string]: number;
  }>({});

  const [stage, setStage] = useState<'PHONE' | 'OTP'>('PHONE');

  const form = useForm<OtpCodeSchema | PhoneSchema>({
    resolver: zodResolver(stage === 'PHONE' ? phoneSchema : otpCodeSchema)
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

    localStorage.setItem(USER_LOCALSTORAGE_KEY, signInResponse.data.token);

    navigate(getRouteMain());
  };

  const onSubmit = form.handleSubmit((data: PhoneSchema | OtpCodeSchema) => {
    console.log('fddslk;dj');

    if (stage === 'PHONE') {
      handleCreateOtp(data as PhoneSchema);
    }

    if (stage === 'OTP') {
      handleSignIn(data as OtpCodeSchema);
    }
  });

  return {
    form,
    isSubmiting: createOtpMutation.isPending || signInMutation.isPending,
    stage,
    onSubmit,
    handleCreateOtp,
    currentPhone,
    submittedPhones
  };
};
