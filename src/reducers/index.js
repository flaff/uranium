import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import pollution from './pollution';
import lights from './lights';

export default combineReducers({
    routing: routerReducer,
    pollution,
    lights
});
