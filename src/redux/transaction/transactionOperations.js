import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorHandler } from 'redux/error/errorHandler';
import {
  addTransactionExpenseApi,
  getTransactionExpenseApi,
  addTransactionIncomeApi,
  deleteTransactionApi,
  getTransactionIncomeApi,
} from 'services/kapustaApi';

export const getTransactionIncome = createAsyncThunk(
  'transaction/income/get',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await getTransactionIncomeApi();
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
      const { data } = await getTransactionExpenseApi();
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
