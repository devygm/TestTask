import { fork } from 'redux-saga/effects';
import { sagaMiddleware } from '../store';
import gitReposSaga from './GitRepos/gitReposSaga';

function* root() {
  yield fork(gitReposSaga);
}

const run = () => sagaMiddleware.run(root);

export default run;
