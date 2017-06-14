import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import CounterContainer from './routes/Counter/Counter'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} >
        <Route path="counter" component={CounterContainer} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
