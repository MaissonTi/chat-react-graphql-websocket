import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';

import Chat from '../pages/Chat';
//import Profile from '../pages/Profile';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Route from './Route';

const RoutesList = ({ location }) => (
  <>
    <Switch location={location}>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/chat" component={Chat} isPrivate />
      {/* <Route path="/profile" component={Profile} isPrivate /> */}
    </Switch>
  </>
);

RoutesList.propTypes = {
  location: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
};

RoutesList.defaultProps = {
  location: {},
};

export default RoutesList;
