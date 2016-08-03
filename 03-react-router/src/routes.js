import React from "react";
import {Router,Route,hashHistory} from 'react-router';
import {Home,Counter} from './containers/index'

export default ()=>{
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Home} />
      <Route path="/counter" component={Counter} />
    </Router>
  )
}
