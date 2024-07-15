import type { ReactNode } from 'react';
import type { LinkProps as ReactRouterDomLinkProps } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import cls from './Link.module.scss';

interface LinkProps extends ReactRouterDomLinkProps {
  className?: string;
  children?: ReactNode;
  isActive?: boolean;
}

export const Link = ({ className, isActive, to, children, ...props }: LinkProps) => (
  <NavLink to={to} className={clsx(cls.link, { [cls.active]: isActive }, className)} {...props}>
    {children}
  </NavLink>
);
