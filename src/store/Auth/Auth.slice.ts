import { createSlice } from '@reduxjs/toolkit';

import { IAuthReducers, IAuthStore, UserRole } from './Auth.types';

const initialState: IAuthStore = {
  role: UserRole.Guest
};

export const slice = createSlice<IAuthStore, IAuthReducers>({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.role = UserRole.Admin;
    },
    logout: (state) => {
      state.role = UserRole.Guest;
    }
  }
});

export const { login, logout } = slice.actions;

export default slice.reducer;
