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

export const Button = forwardRef<ButtonProps, ForwardedRef<HTMLButtonElement>>(
  (
    { className, children, variant = 'primary_filled', disabled, fullWidth, loading, ...props },
    ref
  ) => {
    return (
      <button
        type='button'
        className={clsx(cls.button, fullWidth && cls.full_width, className, cls[variant])}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {loading ? 'Загрузка...' : children}
      </button>
    );
  }
);
