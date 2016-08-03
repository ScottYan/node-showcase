/**
 * Created by Scott on 16-7-27.
 */
import React,{PropTypes} from 'react';
import store from '../../redux/createStore';
import {increment as actIncrement} from '../../redux/modules/Counter'

export default class Counter extends React.Component{

    componentWillMount(){
      //console.log('counter will mount');
      this.syncState();
      this.unsubscribe=store.subscribe(()=>{
        this.syncState();
      });
    }

    componentWillUnmount(){
      //console.log('counter will unmount.');
      this.unsubscribe();
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
