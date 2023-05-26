import { createSlice } from '@reduxjs/toolkit';
import {
  getTransactionIncome,
  getTransactionExpense,
  addTransactionIncome,
  deleteTransaction,
  getTransactionByPeriod,
  getAllCategories,
  addTransactionExpense,
} from './transactionOperations';

import {
  getTransactionIncomeCategories,
  getTransactionExpenseCategories,
} from 'redux/reports/reportsOperations';

// const categoriesAdapter = createEntityAdapter({

// });

const initialState = {
  newBalance: 0,
  expenses: [],
  expensesStats: {},
  incomes: [],
  incomesStats: {},
  currentTransactionType: 'expenses',
  isLoading: false,
  error: null,
  categories: [],
  incomesCategories: [],
  expensesCategories: [],
  transaction: null,
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    changeTransactionType: {
      reducer(state, { payload }) {
        state.currentTransactionType = payload;
      },
    },
    deleteTransactionById: {
      reducer(state, { payload }) {
        console.log(state.currentTransactionType);

        const transactionType = state.currentTransactionType;
        console.log(state[transactionType]);
        state[transactionType] = state[transactionType].filter(
          transaction => transaction._id !== payload
        );
      },
    },
  },
  extraReducers: builder => {
    builder
      // ================== GET TRANSACTION INCOME
      .addCase(getTransactionIncome.pending, state => {
        state.isLoading = true;
      })
      .addCase(getTransactionIncome.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;

        state.incomes = payload.incomes;
        state.incomesStats = payload.monthsStats;
      })
      .addCase(getTransactionIncome.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ================== GET TRANSACTION EXPENSE
      .addCase(getTransactionExpense.pending, state => {
        state.isLoading = true;
      })
      .addCase(getTransactionExpense.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.expenses = payload.expenses;
        state.expensesStats = payload.monthsStats;
      })
      .addCase(getTransactionExpense.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ================== ADD TRANSACTION INCOME
      .addCase(addTransactionIncome.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTransactionIncome.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.newBalance = payload.newBalance;
        state.incomes.push(payload.transaction);
      })
      .addCase(addTransactionIncome.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ================== ADD TRANSACTION EXPENSE
      .addCase(addTransactionExpense.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTransactionExpense.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.newBalance = payload.newBalance;
        state.expenses.push(payload.transaction);
      })
      .addCase(addTransactionExpense.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ======== GET EXPENSES CATEGORIES
      .addCase(
        getTransactionExpenseCategories.fulfilled,
        (state, { payload }) => {
          state.expensesCategories = [...payload];
        }
      ) // GET INCOMES CATEGORIES
      .addCase(
        getTransactionIncomeCategories.fulfilled,
        (state, { payload }) => {
          state.incomesCategories = [...payload];
        }
      )

      // ================== DELETE TRANSACTION
      .addCase(deleteTransaction.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.newBalance = payload.newBalance;
      })
      .addCase(deleteTransaction.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }) // ================= GET BY PERIOD
      .addCase(getTransactionByPeriod.fulfilled, (state, { payload }) => {
        state.transaction = payload;
      })
      // GET ALL CATEGORIES
      .addCase(getAllCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
      });
  },
});
export const { changeTransactionType, deleteTransactionById } =
  transactionSlice.actions;
export default transactionSlice.reducer;
