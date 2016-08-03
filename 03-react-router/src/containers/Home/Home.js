import React from 'react';
import {Counter} from '../../components/index';
import {Link} from 'react-router';

export default React.createClass({
  render(){
    return (
      <div>
        <div>I as home</div>
        <Link to="/counter">to counter</Link>
      </div>
    )
  }
})
