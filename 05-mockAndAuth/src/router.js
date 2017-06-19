import React from 'react';
import { Router, Route, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Category from './routes/Category'
import Brand from './routes/Brand'
import Login from './routes/Login'
import EnsureLoginContainer from './routes/EnsureLoginContainer'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Redirect from="/" to="/category" />
      <Route path="/" component={IndexPage} >
        <Route path="login" component={Login} />
        <Route component={EnsureLoginContainer}>
          <Route path="category" component={Category} />
          <Route path="brand" component={Brand} />
        </Route>
      </Route>
    </Router>
  );
}

export default RouterConfig;
