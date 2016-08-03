/**
 * Created by Scott on 2016-7-27.
 */
import {
    createStore,
    combineReducers
} from 'redux';
import reducer from './modules/Counter';

export default createStore(combineReducers({
    Counter: reducer
}));
