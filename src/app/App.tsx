import { Suspense } from 'react';
import { Layout, LayoutLoader } from '@components/Layout';

export const App = () => {
  return (
    <div id='app' className='app'>
      <Suspense fallback={<LayoutLoader />}>
        <Layout />
      </Suspense>
    </div>
  );
};
