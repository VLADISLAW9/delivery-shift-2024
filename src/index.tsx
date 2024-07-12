import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { getSession } from '@api/requests';
import { AUTH_TOKEN } from '@consts/localstorage.ts';
import { useUserStore } from '@store/hooks/useUserStore.ts';

import { App } from '@/app/App';
import { TanStackQueryProvider } from '@/app/providers/TanStackQueryProvider';

import '@/app/styles/index.scss';

const init = async () => {
  const token = localStorage.getItem(AUTH_TOKEN);

  if (token) {
    const getUserResponse = await getSession();
    useUserStore.setState({ initUser: getUserResponse.data.user });
  }

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <BrowserRouter>
        <TanStackQueryProvider>
          <App />
        </TanStackQueryProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

init();
