/**
 * Created by Scott on 2016-7-27.
 */
import React from "react";
import ReactDom from "react-dom";
import {Router,Route,hashHistory} from 'react-router';
import {Home,Counter} from './containers/index'

ReactDom.render(
    <Router history={hashHistory}>
      <Route path="/" component={Home} />
      <Route path="/counter" component={Counter} />
    </Router>,
    document.getElementById("root")
);
