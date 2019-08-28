// @flow
import { combineReducers } from 'redux';
import getCommitsReducer from './getCommitsReducer';
import loaderReducers from './loaderReducers';

const appReducer = combineReducers({
  getCommitsReducer,
  loaderReducers,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
