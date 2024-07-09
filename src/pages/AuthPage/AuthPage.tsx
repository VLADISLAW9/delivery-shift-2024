import { Controller } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';
import { Button } from '@ui/Button';
import { Input } from '@ui/Input';
import { Typography } from '@ui/Typography';

import { CountDownButton } from './components/CountDownButton';
import { useAuthPage } from './hooks/useAuthPage';

import cls from './AuthPage.module.scss';

const AuthPage = () => {
  const { form, state, functions } = useAuthPage();

  return (
    <div className={cls.auth_page_wrapper}>
      <Typography variant='typography24_semibold'>Вход</Typography>
      <Typography tag='p' variant='typography16_regular'>
        Введите номер телефона для входа <br /> в личный кабинет
      </Typography>
      <form onSubmit={functions.onSubmit} className={cls.sign_in_form_wrapper}>
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
              {...(fieldState.error && {
                error: { error: true, message: fieldState.error.message }
              })}
            />
          )}
        />
        {state.stage === 'otp' && (
          <Controller
            name='otpCode'
            control={form.control}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                component={PatternFormat}
                format='######'
                placeholder='Проверочный код'
                {...(fieldState.error && {
                  error: { error: true, message: fieldState.error.message }
                })}
              />
            )}
          />
        )}
        <Button
          loading={state.isSubmiting}
          type='submit'
          className={cls.continue_button}
          variant='primary_filled'
        >
          {state.stage === 'phone' ? 'Продолжить' : 'Войти'}
        </Button>
        {state.stage === 'otp' && (
          <CountDownButton
            endTime={state.submittedPhones[state.currentPhone]}
            loading={state.isSubmiting}
            onRetrySendOtpCode={functions.handleCreateOtp}
          />
        )}
      </form>
    </div>
  );
};

export default AuthPage;
