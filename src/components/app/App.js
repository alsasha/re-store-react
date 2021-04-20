import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  HomePage,
  CardPage
} from '../pages';
import Header from '../header';

const App = () => {

  return (
    <main role="main" className="container">
      <Header />
      <Switch>
        <Route
          path="/"
          exact
          component={HomePage}
        />
      </Switch>
    </main>
  )
}

export default App;