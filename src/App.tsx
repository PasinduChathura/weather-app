import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from './views/HomePage/HomePage';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Layout>
          <HomePage />
        </Layout>
      </Route>
    </Switch>
  );
}

export default App;
