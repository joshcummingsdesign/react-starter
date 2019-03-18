import { combineReducers } from 'redux';
import loading from './loading/reducers';
import error from './error/reducers';

const request = combineReducers({ loading, error });

export default request;
