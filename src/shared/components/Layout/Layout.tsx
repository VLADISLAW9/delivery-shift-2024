import { isMobile } from 'react-device-detect';
import { Header } from '@components/Header';
import { Flex } from '@ui/Flex';

import { AppRouter } from '@/app/providers/router/AppRouter.tsx';

import cls from './Layout.module.scss';

export const Layout = () => {
  if (isMobile) {
    return <div>Mobile</div>;
  }

  return (
    <Flex direction='column' className={cls.desktop_layout}>
      <Header />
      <div className={cls.content}>
        <AppRouter />
      </div>
    </Flex>
  );
};
