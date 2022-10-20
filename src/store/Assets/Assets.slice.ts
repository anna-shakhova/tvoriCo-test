import { createSlice } from '@reduxjs/toolkit';

import { ICounterReducers, ICounterStore } from './Assets.types';
import { MOCK_ASSETS } from './__mocks__';

const initialState: ICounterStore = {
  assets: MOCK_ASSETS,
  isEditDialogOpen: false,
  assetToEdit: null
};

export const slice = createSlice<ICounterStore, ICounterReducers>({
  name: 'counter',
  initialState,
  reducers: {
    openEditDialog: (state, { payload }) => {
      state.isEditDialogOpen = true;
      state.assetToEdit = payload ?? null;
    },
    closeEditDialog: (state) => {
      state.isEditDialogOpen = false;
      state.assetToEdit = null;
    },
    updateAsset: (state, { payload }) => {
      state.isEditDialogOpen = false;
      state.assets = state.assets.map((asset) =>
        (asset.id === payload.id ? payload : asset));
    },
    deleteAsset: (state, { payload }) => {
      state.assets = state.assets.filter(({ id }) => id !== payload);
    },
    addAsset: (state, { payload }) => {
      state.assets = [payload, ...state.assets];
    }
  }
});

export const { openEditDialog, closeEditDialog, updateAsset, deleteAsset, addAsset } = slice.actions;

export default slice.reducer;
