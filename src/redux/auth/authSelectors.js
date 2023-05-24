export const selectAuth = state => state.auth.isAuth;
export const selectAccessToken = state => state.auth.accesToken;
export const selectRefreshToken = state => state.auth.refreshToken;
export const selectEmail = state => state.auth.userData.email;
export const selectBalance = state => state.auth.userData.balance;
export const selectTransaction = state => state.auth.userData.transaction;
