import type { ReactNode } from 'react';
import type { LinkProps as ReactRouterDomLinkProps } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import cls from './Link.module.scss';

interface LinkProps extends ReactRouterDomLinkProps {
  className?: string;
  children?: ReactNode;
}

export const Link = ({ className, to, children, ...props }: LinkProps) => (
  <NavLink
    to={to}
    className={({ isActive }) => clsx(cls.link, isActive && cls.active, className)}
    {...props}
  >
    {children}
  </NavLink>
);
