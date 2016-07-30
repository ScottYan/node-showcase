/**
 * Created by Scott on 16-7-27.
 */
import React,{PropTypes} from 'react';
import store from '../redux/createStore';
import {increment as actIncrement} from '../redux/component/Hello'

export default class HelloMessage extends React.Component{

    render(){
        return (
            <div>
                <div>{this.state.count}</div>
                <input type="button" onClick={this.increment} value="click me" />
            </div>
        );
    }

    componentWillMount(){
      this.syncState();
      store.subscribe(()=>{
        this.syncState();
      });
    }

    syncState(){
      this.setState(store.getState().Hello);
    }

    increment(){
      store.dispatch(actIncrement());
    }

}
