import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import cls from './RadioGroupItem.module.scss';

interface RadioGroupItemProps extends RadioGroupPrimitive.RadioGroupItemProps {
  value: string;
}

export const RadioGroupItem = forwardRef<RadioGroupItemProps, ForwardedRef<HTMLDivElement>>(
  ({ children, value, error, ...props }, ref) => (
    <div className={cls.radio_group_item_wrapper}>
      <RadioGroupPrimitive.Item ref={ref} className={cls.radio_group_item} value={value} {...props}>
        <RadioGroupPrimitive.Indicator className={cls.radio_group_indicator} />
      </RadioGroupPrimitive.Item>
      <label className='Label' htmlFor='r1'>
        {children}
      </label>
    </div>
  )
);
