/**
 * Created by Scott on 16-7-27.
 */
import React,{PropTypes} from 'react';
import store from '../redux/createStore';
import {increment as actIncrement} from '../redux/modules/Counter'

export default class Counter extends React.Component{

    componentWillMount(){
      this.syncState();
      store.subscribe(()=>{
        this.syncState();
      });
    }

    syncState(){
      this.setState(store.getState().Counter);
    }

    increment(){
      store.dispatch(actIncrement());
    }

    render(){
        return (
            <div>
                <div>{this.state.count}</div>
                <input type="button" onClick={this.increment} value="click me" />
            </div>
        );
    }

}
