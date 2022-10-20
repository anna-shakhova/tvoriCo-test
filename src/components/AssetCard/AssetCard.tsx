import React, { FC, memo, useCallback, useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Tooltip,
  Typography
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import styles from './AssetCard.module.scss';
import { AssetCardProps } from './AssetCard.types';
import { useAppDispatch, useAppSelector } from '../../store/Store';
import { UserRole } from '../../store/Auth/Auth.types';
import { deleteAsset, openEditDialog } from '../../store/Assets/Assets.slice';

const AssetCard: FC<AssetCardProps> = ({ asset }) => {
  const dispatch = useAppDispatch();
  const { role } = useAppSelector((store) => store.auth);

  const [isDeletePrompt, setIsDeletePropmt] = useState(false);

  const isAdmin = role === UserRole.Admin;

  const onEditHandler = useCallback(() => dispatch(openEditDialog(asset)), [dispatch, asset]);

  const onDeleteHandler = useCallback(() => dispatch(deleteAsset(asset.id)), [dispatch, asset]);

  const onOpenPromptHandler = useCallback(() => setIsDeletePropmt(true), []);

  const onClosePromptHandler = useCallback(() => setIsDeletePropmt(false), []);

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
        <div className={styles.actions}>
          <IconButton aria-label="edit asset description" onClick={onEditHandler} size="small">
            <EditIcon color="primary" fontSize="small" />
          </IconButton>
          <IconButton aria-label="edit asset description" onClick={onOpenPromptHandler} size="small">
            <DeleteIcon color="primary" fontSize="small" />
          </IconButton>
        </div>
      )}

      <Dialog
        open={isDeletePrompt}
        onClose={onClosePromptHandler}
      >
        <DialogTitle>
          Delete Asset
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you want to delete {asset.title}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClosePromptHandler}>Cancel</Button>
          <Button onClick={onDeleteHandler} variant="contained" color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default memo(AssetCard);
