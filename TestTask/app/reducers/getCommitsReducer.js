import { GET_USER_REPOS_SUCCESS, GET_USER_REPOS_FAILURE } from '../actions/userReposAction';

const initialState = {
  getCommitsResponse: {},
  getCommitsList: [],
};

function getCommitsReducer(state = initialState, action) {
  if (action.type === 'undefined') {
    return state;
  }

  switch (action.type) {
    case GET_USER_REPOS_SUCCESS:
      return {
        ...state,
        getCommitsResponse: action.data,
      };
    case GET_USER_REPOS_FAILURE:
      return {
        ...state,
        getCommitsResponse: {},
      };
    default:
      return state;
  }
}

export default getCommitsReducer;
