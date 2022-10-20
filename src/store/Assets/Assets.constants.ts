import { ICounterStore } from './Assets.types';
import { MOCK_ASSETS } from './__mocks__';

export const INITIAL_COUNTER: ICounterStore = {
  assets: MOCK_ASSETS,
  value: 0,
  status: 'idle'
};
