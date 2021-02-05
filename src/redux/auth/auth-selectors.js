export const getUserName = state => state.auth.user.name;

export const getIsAuthenticated = state => state.auth.isAuthenticated;

export const getIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
