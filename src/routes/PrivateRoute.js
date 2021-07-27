import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
export default function PrivateRoute(props) {
  const { isLogin } = useSelector((state) => state.auth);
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLogin) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
              }}
            />
          );
        }
      }}
    />
  );
}
