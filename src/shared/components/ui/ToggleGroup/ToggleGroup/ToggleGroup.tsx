import React from 'react';
import type * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';

import './styles.css';

export const ToggleGroup = ({
  children,
  ...props
}: ToggleGroupPrimitive.ToggleGroupSingleProps) => (
  <ToggleGroupPrimitive.Root {...props}>{children}</ToggleGroupPrimitive.Root>
);
