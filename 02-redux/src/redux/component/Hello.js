const INCREMENT = "increment";
const initialState={count:0};

export default function reducer(state=initialState,action={}){
  switch (action.type) {
    case INCREMENT:
      var cnt=state.count+1;
      return {...state, ...{'count': cnt}};
    default:
      return state;
  }
}

export function increment(){
  return {type:INCREMENT};
}
