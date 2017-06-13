import {ACT_ADD, ACT_SUB} from '../actionTypes'

const counter = (state = {value: 0}, action) => {
  switch(action.type){
    case ACT_ADD:
      return {...state, ...{value:state.value+1}}
    case ACT_SUB:
      return {...state, ...{value:state.value-1}}
    default:
      return state
  }
}

export default counter
