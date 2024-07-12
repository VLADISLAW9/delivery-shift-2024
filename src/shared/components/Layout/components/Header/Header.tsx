import { AUTH_TOKEN } from '@consts/localstorage.ts';
import { getRouteAuth, getRouteMain, getRouteOrders, getRouteProfile } from '@consts/router';
import { useUserStore } from '@store/hooks/useUserStore';
import { AppLogo } from '@ui/AppLogo';
import { Button } from '@ui/Button';
import { Link } from '@ui/Link';
import { Typography } from '@ui/Typography';

import cls from './Header.module.scss';

interface HeaderProps {
  mobile?: boolean;
}

export const Header = ({ mobile }: HeaderProps) => {
  const { isLoggedIn } = useUserStore();
  const { clearUser } = useUserStore();

  const onLogout = () => {
    clearUser();
    localStorage.removeItem(AUTH_TOKEN);
  };

  if (mobile) {
    return null;
  }

  return (
    <div className={cls.desktop_header}>
      <Link to={getRouteMain()}>
        <AppLogo className={cls.app_logo} />
      </Link>
      {isLoggedIn ? (
        <>
          <div className={cls.navbar}>
            <Link to={getRouteProfile()}>
              <Typography variant='typography16_medium'>Профиль</Typography>
            </Link>
            <Link to={getRouteOrders()}>
              <Typography variant='typography16_medium'>История</Typography>
            </Link>
          </div>
          <Button onClick={onLogout} variant='clear'>
            <Typography variant='typography16_medium'>Выйти</Typography>
          </Button>
        </>
      ) : (
        <Link to={getRouteAuth()}>
          <Typography variant='typography16_medium'>Войти</Typography>
        </Link>
      )}
    </div>
  );
};
