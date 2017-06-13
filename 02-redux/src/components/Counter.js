import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreators from '../actions'

const Counter = (props) => {
  return (
    <div>
      <label>{props.value}</label>
      <br />
      <button onClick={props.add}>Add</button>
      <button onClick={props.subtract}>Subtract</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {...state.counter}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)
