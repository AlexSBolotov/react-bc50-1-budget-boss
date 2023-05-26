export const selectAuth = state => state.auth.isAuth;
export const selectAccessToken = state => state.auth.accessToken;
export const selectRefreshToken = state => state.auth.refreshToken;
export const selectRefreshUser = state => state.auth.isRefreshing;
export const selectError = state => state.auth.error;
export const selectEmail = state => state.auth.userData.email;
export const selectBalance = state => state.auth.userData.balance;
export const selectTransactions = state => state.auth.userData.transactions;
