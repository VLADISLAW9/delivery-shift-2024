import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import clsx from 'clsx';

import cls from './RadioGroupItem.module.scss';

interface RadioGroupItemProps extends RadioGroupPrimitive.RadioGroupItemProps {
  value: string;
  className?: string;
}

export const RadioGroupItem = forwardRef<HTMLButtonElement, RadioGroupItemProps>(
  ({ children, className, value, error, ...props }, ref) => (
    <div className={clsx(cls.radio_group_item_wrapper, className)}>
      <RadioGroupPrimitive.Item ref={ref} className={cls.radio_group_item} value={value} {...props}>
        <RadioGroupPrimitive.Indicator className={cls.radio_group_indicator} />
      </RadioGroupPrimitive.Item>
      <label className='Label' htmlFor='r1'>
        {children}
      </label>
    </div>
  )
);
