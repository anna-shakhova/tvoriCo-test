import { CaseReducer, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';

export interface IAssetItem {
  id: string;
  title: string;
  description: string;
  price: number;
  url: string;
}

export type TCounterStatus = 'idle' | 'loading' | 'failed';

export interface ICounterStore {
  assets: IAssetItem[];
  value: number;
  status: TCounterStatus;
}

export interface ICounterReducers extends SliceCaseReducers<ICounterStore> {
  increment: CaseReducer<ICounterStore>;
  decrement: CaseReducer<ICounterStore>;
  incrementByAmount: CaseReducer<ICounterStore, PayloadAction<number>>;
}
