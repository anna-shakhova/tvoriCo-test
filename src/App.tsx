import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Main, Material } from './routes';
import './App.module.scss';

const App: FC = () => (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/material" component={Material} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
