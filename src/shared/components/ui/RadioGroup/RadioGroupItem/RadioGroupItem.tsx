import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

interface RedioGroupItemProps extends RadioGroupPrimitive.RadioGroupItemProps {
  variant: 'default' | 'tabs';
}

export const RadioGroupItem = forwardRef<RedioGroupItemProps, ForwardedRef<HTMLDivElement>>(
  ({ children, variant = 'default', ...props }, ref) => {
    if (variant === 'tabs') {
      return (
        <RadioGroupPrimitive.Item className='RadioGroupItem' {...props}>
          <RadioGroupPrimitive.Indicator ref={ref} className='RadioGroupIndicator' />
        </RadioGroupPrimitive.Item>
      );
    }

    return (
      <RadioGroupPrimitive.Item className='RadioGroupItem' {...props}>
        <RadioGroupPrimitive.Indicator ref={ref} className='RadioGroupIndicator' />
      </RadioGroupPrimitive.Item>
    );
  }
);
