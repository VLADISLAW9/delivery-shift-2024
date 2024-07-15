import React from 'react';
import type { InputError } from '@appTypes/common';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import clsx from 'clsx';

import cls from './RadioGroup.module.scss';

interface RadioGroupProps extends RadioGroupPrimitive.RadioGroupProps {
  error?: InputError;
  className?: string;
}

export const RadioGroup = ({ children, className, error, ...props }: RadioGroupProps) => (
  <div className={clsx(cls.radio_group_wrapper, className)}>
    <RadioGroupPrimitive.Root aria-label='View density' className={cls.radio_group} {...props}>
      {children}
    </RadioGroupPrimitive.Root>
    {error?.message && <p className={cls.error}>{error.message}</p>}
  </div>
);
