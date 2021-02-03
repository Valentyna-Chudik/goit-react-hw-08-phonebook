// import { createSelector } from '@reduxjs/toolkit';

export const getIsAuthenticated = state => state.auth.isAuthenticated;

export const getIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
export const getUserName = state => state.auth.user.name;
