import React, { FC } from 'react';

import { AssetCard, EditAssetDialog } from '../../components';
import styles from './Main.module.scss';
import { useAppSelector } from '../../store/Store';

const Main: FC = () => {
  const { assets } = useAppSelector((state) => state.assets);

  return (
    <div className={styles.root}>
      <div className={styles.assets}>
        {assets.map((asset) => <AssetCard key={asset.id} asset={asset} />)}
      </div>

      <EditAssetDialog />
    </div>
  );
};

export default Main;
