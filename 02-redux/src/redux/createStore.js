/**
 * Created by Scott on 2016-7-27.
 */
import {createStore,combineReducers} from 'redux';
import reducer from './component/Hello';

export default createStore(combineReducers({Hello:reducer}));
