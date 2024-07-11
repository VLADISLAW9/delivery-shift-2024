import { AppRouter } from '@/app/providers/router';

import { Header } from '../Header';

import cls from './DesktopLayout.module.scss';

export const DesktopLayout = () => (
  <div className={cls.desktop_layout}>
    <Header />
    <div className={cls.content}>
      <AppRouter />
    </div>
  </div>
);
