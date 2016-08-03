/**
 * Created by Scott on 2016-7-27.
 */
import React from "react";
import ReactDom from "react-dom";
import {Router,hashHistory} from 'react-router';
import routes from './routes';

ReactDom.render(
    <Router history={hashHistory} routes={routes}>
    </Router>,
    document.getElementById("root")
);
