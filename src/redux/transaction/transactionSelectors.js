// import { createSelector } from '@reduxjs/toolkit';

export const selectPeriod = state => state.transaction.transaction;
export const selectAllCategories = state => state.transaction.categories;
export const selectExpensesCategories = state =>
  state.transaction.expensesCategories;
export const selectIncomesCategories = state =>
  state.transaction.incomesCategories;
