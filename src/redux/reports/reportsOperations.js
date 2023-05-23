import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getTransactionExpenseCategoriesApi,
  getTransactionIncomeCategoriesApi,
  getTransactionPeriodDataApi,
} from 'services/kapustaApi';

export const getTransactionIncomeCategories = createAsyncThunk(
  'transaction/income-categories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getTransactionIncomeCategoriesApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTransactionExpenseCategories = createAsyncThunk(
  'transaction/expense-categories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getTransactionExpenseCategoriesApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTransactionPeriod = createAsyncThunk(
  'transaction/period-data',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await getTransactionPeriodDataApi(date);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
