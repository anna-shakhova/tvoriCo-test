import React, { FC, memo } from 'react';
import { Card, CardContent, CardMedia, Chip, Tooltip, Typography } from '@mui/material';

import styles from './AssetCard.module.scss';
import { AssetCardProps } from './AssetCard.types';

const AssetCard: FC<AssetCardProps> = ({ asset }) => (
  <Card className={styles.root}>
    <CardMedia
      className={styles.image}
      component="img"
      image={asset.url}
      alt={`${asset.title} preview`}
    />
    <CardContent>
      <div className={styles.main}>
        <Tooltip title={asset.title}>
          <Typography className={styles.title} gutterBottom variant="h5" component="div">
            {asset.title}
          </Typography>
        </Tooltip>


        <Chip className={styles.price} label={`$${asset.price}`} color="primary" />
      </div>

      <Typography variant="body2" color="text.secondary">
        {asset.description}
      </Typography>
    </CardContent>
  </Card>
);

export default memo(AssetCard);
