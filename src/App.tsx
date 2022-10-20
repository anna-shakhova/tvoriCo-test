import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Main, Material } from './routes';
import styles from './App.module.scss';
import { Header } from './components';

const App: FC = () => (
  <BrowserRouter>
    <div className={styles.root}>
      <Header />
      <div className={styles.content}>
        <Switch>
          <Route exact path="/tvoriCo-test" component={Main} />
          <Route path="/tvoriCo-test/material" component={Material} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
