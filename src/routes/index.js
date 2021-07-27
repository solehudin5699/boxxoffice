import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Regist from '../pages/Regist';
import PrivateRoute from './PrivateRoute';

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/login" component={Login} />
        <Route path="/regist" component={Regist} />
        <PrivateRoute exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default AppRouter;
