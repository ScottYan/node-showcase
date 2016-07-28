/**
 * Created by Scott on 16-7-27.
 */
import React,{PropTypes} from 'react';

export default class HelloMessage extends React.Component{
    static propTypes = {
        msg:PropTypes.string.isRequired
    };

    render(){
        return (
            <div>
                Hello {this.props.msg}!
            </div>
        );
    }
}
