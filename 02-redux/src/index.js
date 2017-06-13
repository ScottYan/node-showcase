/**
 * Created by Scott on 2016-7-27.
 */
import React from "react"
import ReactDom from "react-dom"
import Counter from './components/Counter'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers'

const store = createStore(reducers)
ReactDom.render(
    <Provider store={store}>
        <Counter></Counter>
    </Provider>,
    document.getElementById("root")
);
