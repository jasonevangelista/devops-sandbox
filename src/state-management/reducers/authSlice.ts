import { createSlice } from '@reduxjs/toolkit';
import { loginEmailPassword } from 'state-management/actions/authThunk';
import { User } from 'types/user';

export interface AuthState {
  currentUser: User | null,
  isLoading: boolean,
};

const initialAuthState: AuthState = {
  currentUser: null,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    clearState: (state) => {
      state = initialAuthState;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginEmailPassword.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginEmailPassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
    });
    builder.addCase(loginEmailPassword.rejected, (state) => {
      state.isLoading = false;
      state.currentUser = null;
    });
  }
})

export const { clearState } = authSlice.actions;

export default authSlice.reducer;
