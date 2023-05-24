import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { authSlice } from 'redux/auth';
import { transactionSlice } from 'redux/transactions';

const balanceInitialState = 0;

const balanceReducer = createReducer(balanceInitialState, {
  [authSlice.loginSuccess]: (_, { payload }) => payload.userData.balance,
  [authSlice.logoutSuccess]: () => balanceInitialState,

  [authSlice.updateUserBalanceSuccess]: (_, { payload }) => payload.newBalance,
  [authSlice.getUserInfoSuccess]: (_, { payload }) => payload.balance,

  [transactionSlice.postIncomeSuccess]: (state, { payload }) =>
    payload.newBalance,
  [transactionSlice.postExpenseSuccess]: (state, { payload }) =>
    payload.newBalance,

  [transactionSlice.deleteIncomeSuccess]: (state, { payload }) =>
    payload.data.newBalance,
  [transactionSlice.deleteExpenseSuccess]: (state, { payload }) =>
    payload.data.newBalance,
});

export default combineReducers({
  balance: balanceReducer,
});
