/**
 * Created by Scott on 2016-7-27.
 */
import React from "react";
import ReactDom from "react-dom";
import getRoutes from './routes';


ReactDom.render(
    getRoutes(),
    document.getElementById("root")
);
