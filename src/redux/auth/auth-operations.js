import axios from 'axios';

import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';

axios.defaults.baseURL = 'http://goit-phonebook-api.herokuapp.com';

const userToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = credentials => dispatch => {
  dispatch(registerRequest());

  axios
    .post('/users/signup', credentials)
    .then(({ data: { user, token } }) => {
      userToken.set(token);
      dispatch(registerSuccess({ user, token }));
    })
    .catch(error => dispatch(registerError(error.message)));
};

export const logIn = credentials => dispatch => {
  dispatch(loginRequest());

  axios
    .post('/users/login', credentials)
    .then(({ data: { user, token } }) => {
      userToken.set(token);
      dispatch(loginSuccess({ user, token }));
    })
    .catch(error => dispatch(loginError(error.message)));
};

export const logOut = credentials => dispatch => {
  dispatch(logoutRequest());

  axios
    .post('/users/logout', credentials)
    .then(() => {
      userToken.unset();
      dispatch(logoutSuccess());
    })
    .catch(error => dispatch(logoutError(error.message)));
};

export const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  userToken.set(persistedToken);

  dispatch(getCurrentUserRequest());

  axios
    .get('/users/current')
    .then(({ data }) => dispatch(getCurrentUserSuccess(data)))
    .catch(error => dispatch(getCurrentUserError(error.message)));
};
