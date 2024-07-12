import { Suspense } from 'react';
import { Layout } from '@components/Layout';
import { getRouteMain } from '@consts/router.ts';
import clsx from 'clsx';

export const App = () => {
  return (
    <div id='app' className={clsx('app', { main_page: location.pathname === getRouteMain() })}>
      <Suspense fallback='Загрузка...'>
        <Layout />
      </Suspense>
    </div>
  );
};
