import { getRouteAuth, getRouteMain } from '@consts/router.ts';
import { AppLogo } from '@ui/AppLogo';
import { Button } from '@ui/Button';
import { Flex } from '@ui/Flex';
import { Link } from '@ui/Link';
import { Typography } from '@ui/Typography';

import cls from './Header.module.scss';

interface HeaderProps {
  isMobile?: boolean;
}

export const Header = ({ isMobile }: HeaderProps) => {
  const isLoggedIn = false;

  const onLogout = () => {
    console.log('logout');
  };

  if (isMobile) {
    return null;
  }

  return (
    <Flex direction='row' justify='between' align='center' gap='32' className={cls.desktop_header}>
      <Link to={getRouteMain()}>
        <AppLogo className={cls.app_logo} />
      </Link>
      {isLoggedIn ? (
        <>
          <Flex direction='row' gap='32' className={cls.navbar}>
            <Link to='/'>
              <Typography variant='typography16_medium'>Профиль</Typography>
            </Link>
            <Link to='/'>
              <Typography variant='typography16_medium'>История</Typography>
            </Link>
          </Flex>
          <Button onClick={onLogout} variant='clear'>
            <Typography variant='typography16_medium'>Выйти</Typography>
          </Button>
        </>
      ) : (
        <Link to={getRouteAuth()}>
          <Typography variant='typography16_medium'>Войти</Typography>
        </Link>
      )}
    </Flex>
  );
};
