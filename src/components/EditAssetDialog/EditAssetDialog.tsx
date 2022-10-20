import React, { ChangeEvent, FC, memo, useCallback, useEffect, useState } from 'react';
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel, InputAdornment, Input
} from '@mui/material';
import { v4 as uuid } from 'uuid';

import styles from './EditAssetDialog.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/Store';
import { addAsset, closeEditDialog, updateAsset } from '../../store/Assets/Assets.slice';
import { IAssetItemNoId } from '../../store/Assets/Assets.types';
import { EMPTY_ASSET } from './EditAssetDialog.constants';

const EditAssetDialog: FC = () => {
  const dispatch = useAppDispatch();
  const { isEditDialogOpen, assetToEdit } = useAppSelector((store) => store.assets);

  const [currentAsset, setCurrentAsset] = useState<IAssetItemNoId>(assetToEdit ?? EMPTY_ASSET);

  const onChangeAssetHandler = useCallback((e: ChangeEvent<HTMLInputElement>) =>
    setCurrentAsset((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    })), []);

  const onCloseHandler = useCallback(() => dispatch(closeEditDialog()), [dispatch]);

  const onSaveHandler = useCallback(() => {
    const asset = {
      ...currentAsset,
      id: assetToEdit?.id ?? uuid()
    };
    const action = assetToEdit ? updateAsset : addAsset;

    dispatch(action(asset));
  }, [dispatch, assetToEdit, currentAsset]);

  useEffect(() => setCurrentAsset(assetToEdit ?? EMPTY_ASSET), [assetToEdit]);

  if (!isEditDialogOpen) {
    return null;
  }

  return (
    <Dialog
      open={isEditDialogOpen}
      classes={{ paper: styles.root }}
      onClose={onCloseHandler}
      aria-describedby="Edit asset modal"
    >
      <DialogTitle>
        Edit Asset
      </DialogTitle>
      <DialogContent className={styles.content}>
        <div className={styles.form}>
          <div className={styles.inlineInputs}>
            <TextField
              label="Title"
              name="title"
              variant="standard"
              margin="dense"
              value={currentAsset.title}
              onChange={onChangeAssetHandler}
            />
            <FormControl margin="dense" variant="standard">
              <InputLabel htmlFor="price-adornment">Price</InputLabel>
              <Input
                id="price-adornment"
                name="price"
                inputProps={{
                  inputMode: 'numeric',
                  pattern: '[0-9]*'
                }}
                type="number"
                value={currentAsset.price}
                onChange={onChangeAssetHandler}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </FormControl>
          </div>

          <TextField
            fullWidth
            label="Url"
            name="url"
            variant="standard"
            margin="dense"
            value={currentAsset.url}
            onChange={onChangeAssetHandler}
          />

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Description"
            name="description"
            variant="standard"
            margin="dense"
            value={currentAsset.description}
            onChange={onChangeAssetHandler}
          />
        </div>
        <div className={styles.image} style={{ backgroundImage: `url(${currentAsset.url})` }} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseHandler}>Cancel</Button>
        <Button onClick={onSaveHandler} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default memo(EditAssetDialog);
