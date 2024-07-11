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
        render={({ field: { onChange, value, ...otherFieldProps }, fieldState }) => (
          <RadioGroup {...otherFieldProps} onChange={onChange} value={value}>
            {Object.keys(PayerLabels).map((payer) => (
              <RadioGroupItem
                key={payer}
                value={payer}
                label={PayerLabels[payer]}
                {...(fieldState.error && {
                  error: { error: true, message: fieldState.error.message }
                })}
              >
                {PayerLabels[payer]}
              </RadioGroupItem>
            ))}
          </RadioGroup>
        )}
      />
    </FormWrapper>
  );
};
