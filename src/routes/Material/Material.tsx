import React, { FC } from 'react';
import clsx from 'clsx';
import { Stack, Button } from '@mui/material';

import styles from './Material.module.scss';

const Material: FC = () => (
  <Stack direction="row" spacing={2}>
    <Button classes={{ root: clsx(styles.blackText, styles.margins) }} color="secondary">Secondary</Button>
    <Button variant="contained" color="success">
      Success
    </Button>
    <Button variant="outlined" color="error">
      Error
    </Button>
  </Stack>
);

export default Material;
