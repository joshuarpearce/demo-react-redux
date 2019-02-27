import { combineReducers } from 'redux';
import app from './app/reducer';
import grid from './grid/reducer';

export default combineReducers({
    app,
    grid
});