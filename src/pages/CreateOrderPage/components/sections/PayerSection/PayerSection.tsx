import type { FormEvent } from 'react';
import { Controller } from 'react-hook-form';
import { PayerLabels } from '@pages/CreateOrderPage/components/sections/PayerSection/conts/PayerLabels.ts';
import { useSections } from '@pages/CreateOrderPage/hooks/useSections.ts';
import { RadioGroup, RadioGroupItem } from '@ui/RadioGroup';

import { FormWrapper } from '../../FormWrapper';

export const PayerSection = () => {
  const { functions, form } = useSections('payer');

  return (
    <FormWrapper
      title='Оплата доставки'
      onContinue={functions.onSubmit}
      onComeback={functions.onComeback}
      form={form}
    >
      <Controller
        name='payer'
        control={form.control}
        render={({ field: { value, onChange, ...otherFieldProps }, fieldState }) => {
          return (
            <RadioGroup
              {...otherFieldProps}
              onValueChange={(e) => onChange(e)}
              value={value}
              {...(fieldState.error && {
                error: { error: true, message: fieldState.error.message }
              })}
            >
              {Object.keys(PayerLabels).map((payer) => (
                <RadioGroupItem key={payer} value={payer} label={PayerLabels[payer]}>
                  {PayerLabels[payer]}
                </RadioGroupItem>
              ))}
            </RadioGroup>
          );
        }}
      />
    </FormWrapper>
  );
};
