import { Suspense } from 'react';
import { Layout } from '@components/Layout';

export const App = () => (
  <div id='app' className='app'>
    <Suspense fallback='Загрузка...'>
      <Layout />
    </Suspense>
  </div>
);
