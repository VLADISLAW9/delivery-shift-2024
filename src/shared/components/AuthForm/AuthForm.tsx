import type { UseFormReturn } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';
import { CountDownButton } from '@components/CountDownButton';
import type { OtpCodeSchema } from '@pages/AuthPage/consts/OtpCodeSchema.ts';
import type { PhoneSchema } from '@pages/AuthPage/consts/PhoneSchema.ts';
import { Button } from '@ui/Button';
import { Input } from '@ui/Input';

import cls from './AuthForm.module.scss';

interface AuthFormProps {
  stage: 'PHONE' | 'OTP';
  onSubmit: () => void;
  form: UseFormReturn<OtpCodeSchema | PhoneSchema, any, undefined>;
  isSubmiting?: boolean;
  handleCreateOtp: () => void;
  submittedPhones: { [key: string]: number };
  currentPhone: string;
}

export const AuthForm = ({
  form,
  onSubmit,
  isSubmiting,
  stage,
  handleCreateOtp,
  submittedPhones,
  currentPhone
}: AuthFormProps) => (
  <form onSubmit={onSubmit} className={cls.sign_in_form_wrapper}>
    <Controller
      name='phone'
      control={form.control}
      render={({ field: { onChange, value, ...otherFieldProps }, fieldState }) => (
        <Input
          {...otherFieldProps}
          component={PatternFormat}
          format='+7 ### ### ## ##'
          onChange={(event) => onChange(event.target.value.replace('+', '').replace(/ /g, ''))}
          placeholder='Телефон'
          {...(fieldState.error && { error: fieldState.error.message })}
        />
      )}
    />
    {stage === 'OTP' && (
      <Controller
        name='otpCode'
        control={form.control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            component={PatternFormat}
            format='######'
            placeholder='Проверочный код'
            {...(fieldState.error && { error: fieldState.error.message })}
          />
        )}
      />
    )}
    <Button
      loading={isSubmiting}
      type='submit'
      className={cls.continue_button}
      variant='primary_filled'
    >
      {stage === 'PHONE' ? 'Продолжить' : 'Войти'}
    </Button>
    {stage === 'OTP' && (
      <CountDownButton
        endTime={submittedPhones[currentPhone]}
        loading={isSubmiting}
        onRetrySendOtpCode={handleCreateOtp}
      />
    )}
  </form>
);
