import { Controller } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';
import { useSections } from '@pages/CreateOrderPage/hooks/useSections.ts';
import type { Section } from '@store/hooks/useCreateOrderStore.ts';
import { Input } from '@ui/Input';

import { convertPhoneToString } from '@/shared/utils/convertPhoneToString.ts';

import { SectionWrapper } from '../SectionWrapper/SectionWrapper.tsx';

interface FormSectionProps {
  section: Section;
}

export const FormSection = ({ section }: FormSectionProps) => {
  const { functions, form } = useSections(section);

  if (section === 'sender' || section === 'receiver') {
    return (
      <SectionWrapper
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
  }

  return (
    <SectionWrapper
      title={section === 'receiverAddress' ? 'Откуда забрать' : 'Куда доставить'}
      onComeback={functions.onComeback}
      onContinue={functions.onSubmit}
    >
      <Controller
        name='street'
        control={form.control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            label='Улица'
            placeholder='Улица'
            {...(fieldState.error && {
              error: { error: true, message: fieldState.error.message }
            })}
          />
        )}
      />
      <Controller
        name='house'
        control={form.control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            label='Дом'
            placeholder='Дом'
            {...(fieldState.error && {
              error: { error: true, message: fieldState.error.message }
            })}
          />
        )}
      />
      <Controller
        name='apartment'
        control={form.control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            label='Квартира'
            placeholder='Квартира'
            {...(fieldState.error && {
              error: { error: true, message: fieldState.error.message }
            })}
          />
        )}
      />
      <Controller
        name='comment'
        control={form.control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            label='Заметка'
            placeholder='Заметка для курьера'
            {...(fieldState.error && {
              error: { error: true, message: fieldState.error.message }
            })}
          />
        )}
      />
    </SectionWrapper>
  );
};
