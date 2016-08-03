/**
 * Created by Scott on 2016-7-27.
 */
import React from "react";
import ReactDom from "react-dom";
import Hello from './components/Hello'

ReactDom.render(
    <Hello msg="Scott"></Hello>,
    document.getElementById("root")
);
