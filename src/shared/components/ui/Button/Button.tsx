import type { ComponentPropsWithRef, ForwardedRef, ReactNode } from 'react';
import { forwardRef } from 'react';
import clsx from 'clsx';

import cls from './Button.module.scss';

export type ButtonVariant =
  | 'primary_filled'
  | 'default_filled'
  | 'primary_text'
  | 'default_text'
  | 'clear';

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  className?: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  children?: ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
}

export const Button = forwardRef(
  (
    {
      className,
      children,
      variant = 'primary_filled',
      disabled,
      fullWidth,
      loading,
      ...props
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const ButtonStyleModifiers: StyleModifiers = {
      [cls.full_width]: fullWidth
    };

    return (
      <button
        type='button'
        className={clsx(cls.button, ButtonStyleModifiers, [className, cls[variant]])}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {loading ? 'Загрузка...' : children}
      </button>
    );
  }
);
