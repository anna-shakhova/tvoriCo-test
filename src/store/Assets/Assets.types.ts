import { CaseReducer, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';

export interface IAssetItem {
  id: string;
  title: string;
  description: string;
  price: number;
  url: string;
}

export type IAssetItemNoId = Omit<IAssetItem, 'id'>;

export interface ICounterStore {
  assets: IAssetItem[];
  isEditDialogOpen: boolean;
  assetToEdit: IAssetItem | null;
}

export interface ICounterReducers extends SliceCaseReducers<ICounterStore> {
  openEditDialog: CaseReducer<ICounterStore, PayloadAction<IAssetItem | undefined>>;
  closeEditDialog: CaseReducer<ICounterStore>;
  updateAsset: CaseReducer<ICounterStore, PayloadAction<IAssetItem>>;
  deleteAsset: CaseReducer<ICounterStore, PayloadAction<string>>;
  addAsset: CaseReducer<ICounterStore, PayloadAction<IAssetItem>>;
}
