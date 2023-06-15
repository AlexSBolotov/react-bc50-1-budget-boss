import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorHandler } from 'redux/error/errorHandler';
import {
  getTransactionExpenseApi,
  addTransactionIncomeApi,
  deleteTransactionApi,
  getTransactionIncomeApi,
  getTransactionPeriodDataApi,
  addTransactionExpenseApi,
} from 'services/kapustaApi';

export const getTransactionIncome = createAsyncThunk(
  'transaction/income/get',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const data = await getTransactionIncomeApi();
      return data;
    } catch (error) {
      dispatch(errorHandler({ error, cb: getTransactionIncome }));
      return rejectWithValue(error.message);
    }
  }
);

export const addTransactionIncome = createAsyncThunk(
  'transaction/income/add',
  async (transactionForm, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await addTransactionIncomeApi(transactionForm);
      return data;
    } catch (error) {
      dispatch(
        errorHandler({ error, cb: () => addTransactionIncome(transactionForm) })
      );
      return rejectWithValue(error.message);
    }
  }
);

export const getTransactionExpense = createAsyncThunk(
  'transaction/expense/get',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const data = await getTransactionExpenseApi();
      return data;
    } catch (error) {
      dispatch(errorHandler({ error, cb: getTransactionExpense }));
      return rejectWithValue(error.message);
    }
  }
);

export const addTransactionExpense = createAsyncThunk(
  'transaction/expense/add',
  async (transactionForm, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await addTransactionExpenseApi(transactionForm);
      return data;
    } catch (error) {
      dispatch(
        errorHandler({
          error,
          cb: () => addTransactionExpense(transactionForm),
        })
      );
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transaction/delete',
  async (transactionId, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await deleteTransactionApi(transactionId);
      return data;
    } catch (error) {
      dispatch(
        errorHandler({ error, cb: () => deleteTransaction(transactionId) })
      );
      return rejectWithValue(error.message);
    }
  }
);

export const getTransactionByPeriod = createAsyncThunk(
  'transaction/getPeriod',
  async (param, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await getTransactionPeriodDataApi(param);

      return data;
    } catch (error) {
      dispatch(errorHandler({ error, cb: () => deleteTransaction(param) }));
      return rejectWithValue(error.message);
    }
  }
);

export const getAllCategories = createAsyncThunk(
  'categoties/all',
  async (_, { rejectWithValue }) => {
    try {
      const data = await Promise.allSettled([
        getTransactionIncomeApi,
        getTransactionExpenseApi,
      ]);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
