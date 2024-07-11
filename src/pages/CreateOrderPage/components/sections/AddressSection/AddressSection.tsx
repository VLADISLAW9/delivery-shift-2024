import { Controller } from 'react-hook-form';
import { SectionWrapper } from '@pages/CreateOrderPage/components/SectionWrapper';
import { useSections } from '@pages/CreateOrderPage/hooks/useSections.ts';
import type { Section } from '@store/hooks/useCreateOrderStore';
import { Input } from '@ui/Input';

interface AddressSectionProps {
  section: Exclude<Section, 'option' | 'sender' | 'receiver' | 'payer'>;
}

export const AddressSection = ({ section }: AddressSectionProps) => {
  const { functions, form } = useSections(section);
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
