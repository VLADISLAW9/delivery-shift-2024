import type {
  ComponentProps,
  ForwardedRef,
  JSXElementConstructor,
  ReactElement,
  ReactNode
} from 'react';
import { forwardRef } from 'react';
import clsx from 'clsx';

import cls from './Card.module.scss';

type CardVariant = 'filled' | 'outlined';

type CardProps<Component extends keyof JSX.IntrinsicElements | JSXElementConstructor<any> = 'div'> =
  {
    variant?: CardVariant;
    children: ReactNode;
    component?: keyof JSX.IntrinsicElements;
    className?: string;
  } & ComponentProps<Component>;

export const Card = forwardRef(
  (
    { variant = 'filled', className, children }: CardProps<'div'>,
    ref: ForwardedRef<HTMLDivElement>
  ) => (
    <div
      className={clsx(
        cls.card,
        {
          [cls.filled]: variant === 'filled',
          [cls.outlined]: variant === 'outlined'
        },
        className
      )}
    >
      {children}
    </div>
  )
) as <Component extends keyof JSX.IntrinsicElements | JSXElementConstructor<any> = 'div'>(
  props: CardProps<Component> & { ref?: ForwardedRef<HTMLDivElement> }
) => ReactElement;
