import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchCount } from '../../api/Counter';
import { AppThunk } from '../Store';
import { incrementByAmount, selectCount } from './Assets.slice';

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);

    return response.data;
  }
);

export const incrementIfOdd = createAsyncThunk(
  'counter/incrementIfOdd',
  (amount: number): AppThunk =>
    (dispatch, getState) => {
      const currentValue = selectCount(getState());

      if (currentValue % 2 === 1) {
        dispatch(incrementByAmount(amount));
      }
    }
);
