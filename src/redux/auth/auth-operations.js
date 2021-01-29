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

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = credentials => dispatch => {
  dispatch(registerRequest());

  axios.post('/users/signup', credentials);
  token
    .set(token)
    .then(({ data }) => dispatch(registerSuccess(data)))
    .catch(error => dispatch(registerError(error.message)));
};

export const logIn = credentials => dispatch => {
  dispatch(loginRequest());

  axios
    .post('/users/login', credentials)
    .then(({ data }) => dispatch(loginSuccess(data)))
    .catch(error => dispatch(loginError(error.message)));
};

export const logOut = credentials => dispatch => {
  dispatch(logoutRequest());

  axios
    .post('/users/logout', credentials)
    .then(({ data }) => dispatch(logoutSuccess(data)))
    .catch(error => dispatch(logoutError(error.message)));
};
