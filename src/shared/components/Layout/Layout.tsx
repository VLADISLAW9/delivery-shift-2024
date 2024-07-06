import { isMobile } from 'react-device-detect';

import { AppRouter } from '@/app/providers/router/AppRouter';

import { Header } from './components/Header';

import cls from './Layout.module.scss';

export const Layout = () => {
  if (isMobile) {
    return <div>Mobile</div>;
  }

  return (
    <div className={cls.desktop_layout}>
      <Header />
      <div className={cls.content}>
        <AppRouter />
      </div>
    </div>
  );
};
