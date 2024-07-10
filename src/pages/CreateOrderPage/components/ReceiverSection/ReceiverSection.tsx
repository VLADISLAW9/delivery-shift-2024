import { Controller } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';
import { useReceiverSection } from '@pages/CreateOrderPage/components/ReceiverSection/hooks/useReceiverSection.ts';
import { Button } from '@ui/Button';
import { Input } from '@ui/Input';
import { Typography } from '@ui/Typography';

import { convertPhoneToString } from '@/shared/utils/convertPhoneToString.ts';

import cls from './ReceiverSection.module.scss';

export const ReceiverSection = () => {
  const { state, functions, form } = useReceiverSection();

  return (
    <div className={cls.receiver_section_wrapper}>
      <Typography variant='typography24_bold'>Получатель</Typography>
      <form className={cls.form} onSubmit={functions.onSubmit}>
        <Controller
          name='firstname'
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label='Имя'
              placeholder='Имя'
              {...(fieldState.error && {
                error: { error: true, message: fieldState.error.message }
              })}
            />
          )}
        />
        <Controller
          name='lastname'
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label='Фамилия'
              placeholder='Фамилия'
              {...(fieldState.error && {
                error: { error: true, message: fieldState.error.message }
              })}
            />
          )}
        />
        <Controller
          name='middlename'
          control={form.control}
          render={({ field }) => (
            <Input {...field} label='Отчетство' placeholder='Отчетство (при наличии)' />
          )}
        />
        <Controller
          name='phone'
          control={form.control}
          render={({ field: { onChange, value, ...otherFieldProps }, fieldState }) => (
            <Input
              {...otherFieldProps}
              component={PatternFormat}
              format='+7 ### ### ## ##'
              onChange={(event) => onChange(convertPhoneToString(event.target.value))}
              label='Телефон'
              placeholder='Телефон'
              {...(fieldState.error && {
                error: { error: true, message: fieldState.error.message }
              })}
            />
          )}
        />
        <div className={cls.buttons}>
          <Button
            loading={state.loading}
            variant='default_filled'
            className={cls.button}
            onClick={functions.onComeback}
          >
            Назад
          </Button>
          <Button loading={state.loading} className={cls.button} type='submit'>
            Продолжить
          </Button>
        </div>
      </form>
    </div>
  );
};
