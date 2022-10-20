import React, { FC, useCallback } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Link } from '@mui/material';
import ViewInArIcon from '@mui/icons-material/ViewInAr';

import styles from './Header.module.scss';
import { ROUTES } from '../../constants/routes';
import { useAppDispatch, useAppSelector } from '../../store/Store';
import { UserRole } from '../../store/Auth/Auth.types';
import { login, logout } from '../../store/Auth/Auth.slice';

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { role } = useAppSelector((store) => store.auth);

  const isAdmin = role === UserRole.Admin;

  const onLoginLogoutHandler = useCallback(() => {
    const action = isAdmin ? logout : login;

    dispatch(action());
  }, [isAdmin, dispatch]);

  return (
    <AppBar position="fixed">
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

        <Button color="inherit" onClick={onLoginLogoutHandler}>
          {isAdmin ? 'Logout' : 'Login'}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
