import { createSlice } from '@reduxjs/toolkit';
import {
  getTransactionIncome,
  getTransactionExpense,
  addTransactionIncome,
  addTransactionExpense,
  deleteTransaction,
} from './transactionOperations';

const initialState = {
  newBalance: null,
  transaction: null,
  incomes: null,
  monthStats: null,
  isLoading: false,
  error: null,
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
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
        state.monthStats = payload.monthStats;
      })
      .addCase(getTransactionIncome.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ================== GET TRANSACTION EXPENSE
      .addCase(getTransactionExpense.pending, state => {
        state.isLoading = true;
      })
      .addCase(getTransactionExpense.fulfilled)
      .addCase(getTransactionExpense.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ================== ADD TRANSACTION INCOME
      .addCase(addTransactionIncome.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTransactionIncome.fulfilled)
      .addCase(addTransactionIncome.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ================== ADD TRANSACTION EXPENSE
      .addCase(addTransactionExpense.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTransactionExpense.fulfilled)
      .addCase(addTransactionExpense.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      // ================== DELETE TRANSACTION
      .addCase(deleteTransaction.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteTransaction.fulfilled)
      .addCase(deleteTransaction.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default transactionSlice.reducer;

//   [
//     "Продукты",
//     "Алкоголь",
//     "Развлечения",
//     "Здоровье",
//     "Транспорт",
//     "Всё для дома",
//     "Техника",
//     "Коммуналка и связь",
//     "Спорт и хобби",
//     "Образование",
//     "Прочее"
//   ]
//   {
//     "incomes": {
//       "total": 12000,
//       "incomesData": {
//         "З/П": {
//           "total": 12000,
//           "Аванс": 5000,
//           "Основная": 7000
//         }
//       }
//     },
//     "expenses": {
//       "total": 5200,
//       "incomesData": {
//         "Транспорт": {
//           "total": 4000,
//           "СТО": 3500,
//           "Мойка": 500
//         },
//         "Всё для дома": {
//           "total": 1200,
//           "Вазон": 150,
//           "Шкаф-купе": 1050
//         }
//       }
