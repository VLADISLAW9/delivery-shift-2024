import type { ComponentProps, ForwardedRef, JSXElementConstructor, ReactElement } from 'react';
import { forwardRef, useId } from 'react';
import { JSX } from 'react/jsx-runtime';
import clsx from 'clsx';

import { Typography } from '../Typography';

import cls from './Input.module.scss';
import IntrinsicElements = JSX.IntrinsicElements;
import { Flex } from '@ui/Flex';

type InputProps<
  Component extends keyof JSX.IntrinsicElements | JSXElementConstructor<any> = 'input'
> = {
  label?: string;
  error?: string;
  component?: Component;
} & ComponentProps<Component>;

export const Input = forwardRef(
  (
    { label, className, component, error, id: externalId, required, ...props }: InputProps<'input'>,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const internalId = useId();
    const id = externalId ?? internalId;

    const Component = component || 'input';

    const InputStyleModifiers: StyleModifiers = {
      [cls.error]: !!error
    };

    return (
      <Flex direction='column' gap='8' className={clsx(InputStyleModifiers)}>
        {label && (
          <Typography variant='typography14_regular'>
            {label} {required && '*'}
          </Typography>
        )}
        <Component className={clsx(cls.input, className)} {...props} id={id} ref={ref} />
        {error && (
          <Typography tag='p' variant='typography14_regular'>
            {error}
          </Typography>
        )}
      </Flex>
    );
  }
) as <Component extends keyof IntrinsicElements | JSXElementConstructor<any> = 'input'>(
  props: InputProps<Component> & { ref?: ForwardedRef<HTMLInputElement> }
) => ReactElement;
