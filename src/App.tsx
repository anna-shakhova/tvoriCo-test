import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Main } from './routes';
import styles from './App.module.scss';
import { Header } from './components';
import { ROUTES } from './constants/routes';

const App: FC = () => (
  <BrowserRouter>
    <div className={styles.root}>
      <Header />
      <div className={styles.content}>
        <Switch>
          <Route exact path={ROUTES.main} component={Main} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
