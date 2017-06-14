import React from 'react'

const Counter = (props) => {
  return (
    <div>
      <span>{props.value}</span>
      <br />
      <button onClick={props.onAddClick}>Add</button>
      <button onClick={props.onSubtractClick}>Subtract</button>
    </div>
  )
}

export default Counter
