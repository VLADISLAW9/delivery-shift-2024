import { Controller } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';
import { useSections } from '@pages/CreateOrderPage/hooks/useSections.ts';
import type { Section } from '@store/hooks/useCreateOrderStore';
import { Input } from '@ui/Input';

import { convertPhoneToString } from '@/shared/utils/convertPhoneToString.ts';

import { FormWrapper } from '../../FormWrapper';

interface UserSectionProps {
  section: Exclude<Section, 'option' | 'senderAddress' | 'receiverAddress' | 'payer'>;
}

export const UserSection = ({ section }: UserSectionProps) => {
  const { functions, form } = useSections(section);
  return (
    <FormWrapper
      title={section === 'receiver' ? 'Получатель' : 'Отправитель'}
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
        render={({ field, fieldState }) => (
          <Input
            {...field}
            label='Отчетство'
            placeholder='Отчетство (при наличии)'
            {...(fieldState.error && {
              error: { error: true, message: fieldState.error.message }
            })}
          />
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
    </FormWrapper>
  );
};
