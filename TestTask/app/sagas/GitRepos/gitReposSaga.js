import {
  call, takeLatest, put, all,
} from 'redux-saga/effects';
import { apiCall } from '../../api/apiInterface';

import {
  GET_USER_REPOS_REQUEST,
  getUserReposSuccess,
  getUserReposFailure,
  VALIDATE_REPO_REQUEST,
} from '../../actions/userReposAction';

import {
  showLoader,
  hideLoader,
} from '../../actions/loaderActions';

import {
  getCommitsFromRepo,
  validateRepo,
} from '../../api/urls';

import {
  METHOD_TYPE,
  isSuccessAPI,
  parsedAPIResponse,
  showErrorMessage,
  showExceptionErrorMessage,
} from '../APIHandler';
import Navigation from '../../utils/navigation';
import { screenNames } from '../../utils/constant';
import { showPopupAlertWithTitle } from '../../utils/showAlert';

// get commits
function* getCommits(action) {
  try {
    yield put(showLoader());
    const url = getCommitsFromRepo(action.repo);
    const response = yield call(
      apiCall,
      url,
      METHOD_TYPE.GET,
    );
    yield put(hideLoader());
    const parsedResponse = yield call(parsedAPIResponse, response);
    if (isSuccessAPI(response) && parsedResponse) {
      let dataResponse = {};
      dataResponse = parsedResponse;
      yield put(getUserReposSuccess(dataResponse));
    } else {
      yield put(getUserReposFailure(parsedResponse));
      showErrorMessage(response, parsedResponse);
    }
  } catch (error) {
    yield put(hideLoader());
    showExceptionErrorMessage();
    yield put(getUserReposFailure());
  }
}

function* validateUserRepo(action) {
  try {
    yield put(showLoader());
    const url = validateRepo(action.repo);
    const response = yield call(
      apiCall,
      url,
      METHOD_TYPE.GET,
    );
    yield put(hideLoader());
    const parsedResponse = yield call(parsedAPIResponse, response);
    if (isSuccessAPI(response) && parsedResponse) {
      Navigation.sharedInstance().pushToScreen(screenNames.REPOSITORIES, { repo: action.repo });
    } else {
      showPopupAlertWithTitle('Alert!', 'Invalid repo');
    }
  } catch (error) {
    yield put(hideLoader());
    showPopupAlertWithTitle('Alert!', 'Something went wrong');
  }
}

export default function* gitReposSaga() {
  yield all([
    takeLatest(GET_USER_REPOS_REQUEST, getCommits),
    takeLatest(VALIDATE_REPO_REQUEST, validateUserRepo),
  ]);
}
