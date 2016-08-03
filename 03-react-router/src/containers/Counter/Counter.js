import React from 'react';
import {RouterContext} from 'react-router';
import {Counter} from '../../components/index';

export default React.createClass({

  redirectByCode:function(){
    //TODO:this method is deprecated.
    this.props.history.push("/");
    //this.context.router.push("/");
  },

  render:function(){
    return (
      <div>
        <Counter></Counter>
        <input type="button" value="to home" onClick={this.redirectByCode} />
      </div>
    )
  }
})
