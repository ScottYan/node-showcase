import React from "react";
import {Router,Route} from 'react-router';
import {Home,Counter} from './containers/index'

export default 
[
  {
    path:"/",
    component:Home
  },
  {
    path:"/counter",
    component:Counter
  }
];

// ()=>(
//   <Route>
//     <Route path="/" component={Home} />
//     <Route path="/counter" component={Counter} />
//   </Route>
// )
