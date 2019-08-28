import { bindActionCreators } from 'redux';
import { store } from '../store';

import {
  getUserReposRequest,
  getUserReposSuccess,
  getUserReposFailure,
  validateRepoRequest,
  validateRepoSuccess,
  validateRepoFailure,
} from './userReposAction';

const actions = {
  getUserReposRequest,
  getUserReposSuccess,
  getUserReposFailure,
  validateRepoRequest,
  validateRepoSuccess,
  validateRepoFailure,
};

export default bindActionCreators(actions, store.dispatch);
