import React, { FC, memo, useCallback } from 'react';
import { Card, CardContent, CardMedia, Chip, IconButton, Tooltip, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import styles from './AssetCard.module.scss';
import { AssetCardProps } from './AssetCard.types';
import { useAppDispatch, useAppSelector } from '../../store/Store';
import { UserRole } from '../../store/Auth/Auth.types';
import { openEditDialog } from '../../store/Assets/Assets.slice';

const AssetCard: FC<AssetCardProps> = ({ asset }) => {
  const dispatch = useAppDispatch();
  const { role } = useAppSelector((store) => store.auth);

  const isAdmin = role === UserRole.Admin;

  const onEditHandler = useCallback(() => dispatch(openEditDialog(asset)), [dispatch, asset]);

  return (
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

      {isAdmin && (
        <IconButton className={styles.edit} aria-label="edit asset description" onClick={onEditHandler}>
          <EditIcon color="primary" />
        </IconButton>
      )}
    </Card>
  );
};

export default memo(AssetCard);
