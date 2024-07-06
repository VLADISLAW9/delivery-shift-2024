import { Route, Routes } from 'react-router-dom';

import { routeConfig } from './config/routeConfig.tsx';
import { RequireAuth } from './RequireAuth';

export const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map((route) => (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth>{route.element}</RequireAuth> : route.element}
      />
    ))}
  </Routes>
);
