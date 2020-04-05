import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {getToken} from '../../utils/auth'

const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(p) => {

        if (getToken() || props.path === '/login') {
          return <Component />
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: p.location.pathname,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
export default PrivateRoute;
