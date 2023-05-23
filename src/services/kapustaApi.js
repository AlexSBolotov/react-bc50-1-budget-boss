import axios from 'axios';

const baseUrl = 'https://kapusta-backend.goit.global';

axios.defaults.baseURL = baseUrl;

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/* ================== AUTHORIZATION & AUTHENTICATION =========================== */

export const registerUserApi = userForm => {
  return axios.post('/auth/register', { ...userForm }).then(res => res);
};

export const loginUserApi = userForm => {
  return axios.post('/auth/login', { ...userForm }).then(res => res);
};

export const logoutUserApi = () => {
  return axios.post('/auth/logout').then(res => res);
};

export const refreshTokenApi = sid => {
  return axios.post('/auth/refresh', { sid }).then(res => res);
};

/* ================== GOOGLE AUTHORIZATION ======================= */
export const googleAuthApi = () => {
  return axios.get('auth/google').then(res => res);
};

/* ================== TRANSACTIONS =========================== */
export const addTransactionIncomeApi = transactionForm => {
  return axios
    .post('/transaction/income', { ...transactionForm })
    .then(res => res);
};

export const getTransactionIncomeApi = () => {
  return axios.get('/transaction/income').then(res => res);
};

export const addTransactionExpenseApi = transactionForm => {
  return axios
    .post('/transaction/expense', { ...transactionForm })
    .then(res => res);
};

export const getTransactionExpenseApi = () => {
  return axios.get('/transaction/expense').then(res => res);
};

export const deleteTransactionApi = transactionId => {
  return axios.delete(`/transaction/${transactionId}`).then(res => res);
};

export const getTransactionIncomeCategoriesApi = () => {
  return axios.get('/transaction/income-categories').then(res => res);
};

export const getTransactionExpenseCategoriesApi = () => {
  return axios.get('/transaction/expense-categories').then(res => res);
};

export const getTransactionPeriodDataApi = date => {
  return axios.get(`/transaction/period-data?date=${date}`).then(res => res);
};

/* ================== USER =========================== */
export const updateUserBalanceApi = newBalance => {
  return axios.patch('/user/balance', { ...newBalance }).then(res => res);
};

export const getUserInfoApi = () => {
  return axios.get('/user').then(res => res);
};
