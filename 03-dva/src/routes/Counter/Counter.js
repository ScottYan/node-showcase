import React from 'react'
import { connect } from 'dva'
import CounterComponent from '../../components/Counter/Counter'


const CounterContainer = (props) => {
  return (
    <CounterComponent
      onAddClick={() => {
        props.dispatch(
          {
            type: 'Counter/add',
            payload: props.value + 1
          }
        )
      }}
      onSubtractClick={() => {
        props.dispatch(
          {
            type: 'Counter/add',
            payload: props.value - 1
          }
        )
      }}
      value={props.value}
    />
  )
}

export default connect(({ Counter }) => Counter)(CounterContainer)
