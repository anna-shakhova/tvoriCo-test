import React, { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import { Fab, FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { debounce } from 'lodash';

import { AssetCard, EditAssetDialog } from '../../components';
import styles from './Main.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/Store';
import { UserRole } from '../../store/Auth/Auth.types';
import { openEditDialog } from '../../store/Assets/Assets.slice';
import { IAssetItem } from '../../store/Assets/Assets.types';

const Main: FC = () => {
  const dispatch = useAppDispatch();
  const { assets } = useAppSelector((state) => state.assets);
  const { role } = useAppSelector((store) => store.auth);

  const [filter, setFilter] = useState('');
  const [filteredAssets, setfilteredAssets] = useState<IAssetItem[]>(assets);

  const isAdmin = role === UserRole.Admin;

  const onAddHandler = useCallback(() => dispatch(openEditDialog()), [dispatch]);

  const debounceFilterAssets = useCallback(
    debounce(
      (value: string) =>
        setfilteredAssets(value
          ? assets.filter((asset) => asset.title.toLowerCase().includes(value.toLowerCase()))
          : assets),
      300
    ), [assets]
  );

  const onChangeFilterHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setFilter(e.target.value);
      debounceFilterAssets(e.target.value);
    },
    [debounceFilterAssets]
  );

  useEffect(() => {
    !filter && setfilteredAssets(assets);
  }, [assets, filter]);

  return (
    <div className={styles.root}>

      {isAdmin && (
        <Fab className={styles.addbtn} color="primary" aria-label="add" onClick={onAddHandler}>
          <AddIcon />
        </Fab>
      )}

      <div className={styles.filters}>
        <FormControl variant="outlined">
          <InputLabel htmlFor="filter">Filter</InputLabel>
          <OutlinedInput
            fullWidth
            id="filter"
            value={filter}
            onChange={onChangeFilterHandler}
            margin="dense"
            endAdornment={(
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            )}
            label="Filter"
          />
        </FormControl>
      </div>

      <div className={styles.assets}>
        {filteredAssets.map((asset) => <AssetCard key={asset.id} asset={asset} />)}
      </div>

      <EditAssetDialog />
    </div>
  );
};

export default Main;
