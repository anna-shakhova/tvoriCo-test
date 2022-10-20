import React, { FC, useCallback } from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { AssetCard, EditAssetDialog } from '../../components';
import styles from './Main.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/Store';
import { UserRole } from '../../store/Auth/Auth.types';
import { openEditDialog } from '../../store/Assets/Assets.slice';

const Main: FC = () => {
  const dispatch = useAppDispatch();
  const { assets } = useAppSelector((state) => state.assets);
  const { role } = useAppSelector((store) => store.auth);

  const isAdmin = role === UserRole.Admin;

  const onAddHandler = useCallback(() => dispatch(openEditDialog()), [dispatch]);

  return (
    <div className={styles.root}>

      {isAdmin && (
        <Fab className={styles.addbtn} color="primary" aria-label="add" onClick={onAddHandler}>
          <AddIcon />
        </Fab>
      )}

      <div className={styles.assets}>
        {assets.map((asset) => <AssetCard key={asset.id} asset={asset} />)}
      </div>

      <EditAssetDialog />
    </div>
  );
};

export default Main;
