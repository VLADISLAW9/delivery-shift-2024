import { Suspense, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout } from '@components/Layout';
import { AUTH_TOKEN } from '@consts/localstorage.ts';
import { getRouteMain } from '@consts/router.ts';
import { useUserStore } from '@store/hooks/useUserStore';
import clsx from 'clsx';

import { useGetSessionQuery } from '@/shared/api/hooks';

export const App = () => {
  const location = useLocation();
  const { initUser } = useUserStore.getActions();
  const getSession = useGetSessionQuery();

  const token = localStorage.getItem(AUTH_TOKEN);
  const getSessionResponse = getSession.data?.data;

  useEffect(() => {
    if (getSessionResponse?.success && token) {
      initUser(getSessionResponse.user);
    }
  }, [getSessionResponse, initUser, token]);

  return (
    <div id='app' className={clsx('app', { main_page: location.pathname === getRouteMain() })}>
      <Suspense fallback='Загрузка...'>
        <Layout loading={getSession.isLoading} />
      </Suspense>
    </div>
  );
};
