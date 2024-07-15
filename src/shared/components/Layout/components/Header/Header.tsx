import { useLocation } from 'react-router-dom';
import { AUTH_TOKEN } from '@consts/localstorage.ts';
import { getRouteAuth, getRouteMain, getRouteOrders, getRouteProfile } from '@consts/router';
import ExitIcon from '@icons/exit.svg';
import TimeIcon from '@icons/time.svg';
import UserIcon from '@icons/user.svg';
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
  const location = useLocation();

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
            <Link
              isActive={location.pathname === getRouteProfile()}
              className={cls.link}
              to={getRouteProfile()}
            >
              <UserIcon className={cls.link_icon} />
              <Typography variant='typography16_medium'>Профиль</Typography>
            </Link>
            <Link
              isActive={location.pathname === getRouteOrders()}
              className={cls.link}
              to={getRouteOrders()}
            >
              <TimeIcon className={cls.link_icon} />
              <Typography variant='typography16_medium'>История</Typography>
            </Link>
          </div>
          <Button className={cls.exit_button} onClick={onLogout} variant='clear'>
            <ExitIcon className={cls.button_icon} />
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
