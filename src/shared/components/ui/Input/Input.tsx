import type {
  ComponentProps,
  ForwardedRef,
  JSXElementConstructor,
  ReactElement,
  ReactNode
} from 'react';
import { forwardRef, useId } from 'react';
import type { JSX } from 'react/jsx-runtime';
import clsx from 'clsx';

import cls from './Input.module.scss';

type InputProps<
  Component extends keyof JSX.IntrinsicElements | JSXElementConstructor<any> = 'input'
> = {
  label?: ReactNode;
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

    const Component = component ?? 'input';

    return (
      <div className={clsx(cls.input_wrapper, { [cls.input_wrapper_error]: error })}>
        {label && (
          <p className={cls.label}>
            {label} {required && '*'}
          </p>
        )}
        <Component className={clsx(cls.input, className)} {...props} id={id} ref={ref} />
        {error && <p className={cls.error_message}>{error}</p>}
      </div>
    );
  }
) as <Component extends keyof JSX.IntrinsicElements | JSXElementConstructor<any> = 'input'>(
  props: InputProps<Component> & { ref?: ForwardedRef<HTMLInputElement> }
) => ReactElement;
