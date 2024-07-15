import { forwardRef } from 'react';
import type * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';

export const ToggleGroupItem = forwardRef<
  HTMLButtonElement,
  ToggleGroupPrimitive.ToggleGroupItemProps
>(({ children, ...props }, ref) => (
  <ToggleGroupPrimitive.Item ref={ref} {...props}>
    {children}
  </ToggleGroupPrimitive.Item>
));
