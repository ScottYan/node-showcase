import React from 'react';
import { Router, Route, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage'
import SearchRepo from './routes/SearchRepo/SearchRepo'
import SearchUser from './routes/SearchUser/SearchUser'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Redirect from="/" to="/searchrepo" />
      <Route path="/" component={IndexPage}>
        <Route path="/searchrepo" component={SearchRepo} />
        <Route path="/searchuser" component={SearchUser} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
