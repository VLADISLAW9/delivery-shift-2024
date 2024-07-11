import React from 'react';
import type { InputError } from '@appTypes/common';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import cls from './RadioGroup.module.scss';

interface RadioGroupProps extends RadioGroupPrimitive.RadioGroupProps {
  error?: InputError;
}

export const RadioGroup = ({ children, error, ...props }: RadioGroupProps) => (
  <div className={cls.radio_group_root_wrapper}>
    <RadioGroupPrimitive.Root aria-label='View density' className={cls.radio_group_root} {...props}>
      {children}
    </RadioGroupPrimitive.Root>
    {error?.message && <p className={cls.error}>{error.message}</p>}
  </div>
);
