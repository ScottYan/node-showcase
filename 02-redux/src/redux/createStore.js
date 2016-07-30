import {createStore,combineReducers} from 'redux';
import reducer from './component/Hello';

//console.log(reducer);
export default createStore(combineReducers({Hello:reducer}));
