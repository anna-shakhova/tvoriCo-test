import { CaseReducer, SliceCaseReducers } from '@reduxjs/toolkit';

export enum UserRole {
  'Admin' = 'admin',
  'Guest' = 'guest'
}

export interface IAuthStore {
  role: UserRole;
}

export interface IAuthReducers extends SliceCaseReducers<IAuthStore> {
  login: CaseReducer<IAuthStore>;
  logout: CaseReducer<IAuthStore>;
}
