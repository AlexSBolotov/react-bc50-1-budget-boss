import { createSlice } from '@reduxjs/toolkit';
import {
  getAuthUser,
  loginUser,
  logoutUser,
  refreshToken,
  registerUser,
  // googleAuth,
} from './authOperations';

const initialState = {
  accessToken: null,
  refreshToken: null,
  sid: null,
  email: null,
  balance: null,
  error: null,
  isLoading: false,
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    googleAuth(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  extraReducers: builder => {
    builder
      // ============== REGISTRATION ====================
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        return {
          isAuth: true,
          isLoading: false,
          error: null,
          ...payload,
        };
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ================ LOGIN =========================
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        return {
          isAuth: true,
          isLoading: false,
          error: null,
          ...payload,
        };
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ================ LOGOUT ========================
      .addCase(logoutUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, state => {
        return {
          ...initialState,
        };
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ================ GET AUTHORIZED USER =====================
      .addCase(getAuthUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAuthUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isAuth: true,
          isLoading: false,
          error: null,
          ...payload,
        };
      })
      .addCase(getAuthUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ================ REFRESH TOKEN =====================
      .addCase(refreshToken.pending, state => {
        state.isLoading = true;
      })
      .addCase(refreshToken.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          ...payload,
        };
      })
      .addCase(refreshToken.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
    // ================ GOOGLE AUTHORIZATION ================
    // .addCase(googleAuth.pending, state => {
    //   state.isLoading = true;
    // })
    // .addCase(googleAuth.fulfilled, (state, { payload }) => {
    //   return {
    //     isAuth: true,
    //     isLoading: false,
    //     error: null,
    //     ...payload,
    //   };
    // })
    // .addCase(googleAuth.rejected, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    // });
  },
});

export const { googleAuth } = authSlice.actions;
export default authSlice.reducer;
