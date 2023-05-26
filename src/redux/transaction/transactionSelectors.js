// import { createSelector } from '@reduxjs/toolkit';

export const selectPeriod = state => state.transactions.transaction;
export const selectAllCategories = state => state.transactions.categories;
export const selectExpensesCategories = state =>
  state.transactions.expensesCategories;
export const selectIncomesCategories = state =>
  state.transactions.incomesCategories;
export const selectSelectedDate = state => state.transactions.selectedDate;
export const selectIncomes = state => state.transactions.incomes;
export const selectIncomesStats = state => state.transactions.incomesStats;
export const selectExpenses = state => state.transactions.expenses;
export const selectExpensesStats = state => state.transactions.expensesStats;
export const selectCurrentTransactionType = state =>
  state.transactions.currentTransactionType;
