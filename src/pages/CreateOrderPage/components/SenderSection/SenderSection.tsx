import { Controller } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';
import { useUserSection } from '@pages/CreateOrderPage/hooks/useUserSection.ts';
import { Input } from '@ui/Input';

import { convertPhoneToString } from '@/shared/utils/convertPhoneToString.ts';

import { SectionWrapper } from '../SectionWrapper/SectionWrapper.tsx';

export const SenderSection = () => {
  const { state, functions, form } = useUserSection('sender');

  return (
    <SectionWrapper
      title='Получатель'
      loading={state.loading}
      onComeback={functions.onComeback}
      onContinue={functions.onSubmit}
    >
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
    </SectionWrapper>
  );
};
