import { categoriesAdapter } from 'redux/transaction/transactionSlice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import authReducer from './auth/authSlice';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import transactionReducer from './transaction/transactionSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['sid', 'refreshToken', 'accessToken'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    transactions: transactionReducer,
    // reports: reportReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);

//! ===============
export const { selectAll: selectAllExpenses } = categoriesAdapter.getSelectors(
  state => state.transactions.reports.expenses
);
export const { selectAll: selectAllIncomes } = categoriesAdapter.getSelectors(
  state => state.transactions.reports.incomes
);
