import React, { forwardRef } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import './styles.css';

export const RadioGroup = ({ children, ...props }: RadioGroupPrimitive.RadioGroupProps) => (
  <RadioGroupPrimitive.Root {...props}>
    <div style={{ display: 'flex', alignItems: 'center' }} />
  </RadioGroupPrimitive.Root>
);
