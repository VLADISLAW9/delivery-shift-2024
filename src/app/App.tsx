import { Suspense, useEffect } from 'react';
import { Layout } from '@components/Layout';
import { AUTH_TOKEN } from '@consts/localstorage.ts';

import { useGetSessionQuery } from '@/shared/api/hooks';
import { useUserStore } from '@/shared/store';

export const App = () => {
  const getSession = useGetSessionQuery();

  useEffect(() => {
    if (localStorage.getItem(AUTH_TOKEN) && getSession.data?.data.success) {
      useUserStore.use.initUser(getSession.data.data.user);
    }
  }, []);

  return (
    <div id='app' className='app'>
      <Suspense fallback='Загрузка...'>
        <Layout />
      </Suspense>
    </div>
  );
};
