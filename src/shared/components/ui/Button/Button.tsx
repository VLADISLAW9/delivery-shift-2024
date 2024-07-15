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
  children?: ReactNode | string;
  fullWidth?: boolean;
  loading?: boolean;
}

export const Button = forwardRef<ForwardedRef<HTMLButtonElement>, ButtonProps>(
  (
    { className, children, variant = 'primary_filled', disabled, fullWidth, loading, ...props },
    ref
  ) => {
    return (
      <button
        type='button'
        className={clsx(cls.button, { [cls.full_width]: fullWidth }, className, cls[variant])}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {loading ? 'Загрузка...' : children}
      </button>
    );
  }
);
