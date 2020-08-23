import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import RoutesList from './routesList';

const RouterTransition = () => {
  return (
    <BrowserRouter>
      <Route render={({ location }) => <RoutesList location={location} />} />
    </BrowserRouter>
  );
};

export default RouterTransition;
