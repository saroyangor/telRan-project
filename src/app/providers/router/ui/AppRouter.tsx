import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/widgets/PageLoader';
import { routeConfig } from '@/shared/config/routeConfig';

export const AppRouter = () => (
  <Routes>
    {
      Object.values(routeConfig).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={(
            <Suspense fallback={<PageLoader />}>
              <div className="wrapper">
                {element}
              </div>
            </Suspense>
          )}
        />
      ))
    }
  </Routes>
);
