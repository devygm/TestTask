export const GET_USER_REPOS_REQUEST = 'GET_USER_REPOS_REQUEST';
export const GET_USER_REPOS_SUCCESS = 'GET_USER_REPOS_SUCCESS';
export const GET_USER_REPOS_FAILURE = 'GET_USER_REPOS_FAILURE';

export const VALIDATE_REPO_REQUEST = 'VALIDATE_REPO_REQUEST';
export const VALIDATE_REPO_SUCCESS = 'VALIDATE_REPO_SUCCESS';
export const VALIDATE_REPO_FAILURE = 'VALIDATE_REPO_FAILURE';

export const getUserReposRequest = (repo) => ({
  type: GET_USER_REPOS_REQUEST,
  repo,
});

export const getUserReposSuccess = (data) => ({
  type: GET_USER_REPOS_SUCCESS,
  data,
});

export const getUserReposFailure = () => ({
  type: GET_USER_REPOS_FAILURE,
});

export const validateRepoRequest = (repo) => ({
  type: VALIDATE_REPO_REQUEST,
  repo,
});

export const validateRepoSuccess = (data) => ({
  type: VALIDATE_REPO_SUCCESS,
  data,
});

export const validateRepoFailure = () => ({
  type: VALIDATE_REPO_FAILURE,
});
