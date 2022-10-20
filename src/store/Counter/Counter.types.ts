import { CaseReducer, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';

export type TCounterStatus = 'idle' | 'loading' | 'failed';

export interface ICounterStore {
  value: number;
  status: TCounterStatus;
}

export interface ICounterReducers extends SliceCaseReducers<ICounterStore> {
  increment: CaseReducer<ICounterStore>;
  decrement: CaseReducer<ICounterStore>;
  incrementByAmount: CaseReducer<ICounterStore, PayloadAction<number>>;
}
