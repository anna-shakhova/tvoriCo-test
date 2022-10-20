import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../Store';
import { INITIAL_COUNTER } from './Assets.constants';
import { ICounterReducers, ICounterStore } from './Assets.types';
import { incrementAsync } from './Assets.middleware';

export const slice = createSlice<ICounterStore, ICounterReducers>({
  name: 'counter',
  initialState: INITIAL_COUNTER,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, { payload }) => {
      state.value += payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.value += payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export const { increment, decrement, incrementByAmount } = slice.actions;

export const selectCount = (state: RootState) => state.assets.value;

export default slice.reducer;
