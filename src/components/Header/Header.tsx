import React, { FC, memo } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Link } from '@mui/material';
import ViewInArIcon from '@mui/icons-material/ViewInAr';

import styles from './Header.module.scss';
import { ROUTES } from '../../constants/routes';

const Header: FC = () => (
  <AppBar position="static">
    <Toolbar>
      <ViewInArIcon />
      <Typography
        className={styles.logo}
        variant="h6"
        noWrap
        component="a"
        href={ROUTES.main}
      >
        LOGO
      </Typography>

      <Box sx={{
        flexGrow: 1,
        display: 'flex'
      }}
      >
        <Link className={styles.link} color="inherit" href={ROUTES.main} variant="button" underline="none">
          PRODUCTS
        </Link>
        <Link className={styles.link} color="inherit" href={ROUTES.main} variant="button" underline="none">
          AUTHOR
        </Link>
      </Box>

      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
);

export default memo(Header);
