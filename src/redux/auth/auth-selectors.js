// import { createSelector } from '@reduxjs/toolkit';

export const getIsAuthenticated = state => state.auth.token;
export const getUserName = state => state.auth.user.name;
