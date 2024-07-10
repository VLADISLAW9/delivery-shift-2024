import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import * as SelectPrimitive from '@radix-ui/react-select';

import cls from './SelectItem.module.scss';

export const SelectItem = forwardRef<SelectPrimitive.SelectItemProps, ForwardedRef<HTMLDivElement>>(
  ({ children, ...props }, ref) => {
    return (
      <SelectPrimitive.Item className={cls.select_item} {...props} ref={ref}>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        <SelectPrimitive.ItemIndicator>
          <CheckIcon />
        </SelectPrimitive.ItemIndicator>
      </SelectPrimitive.Item>
    );
  }
);
