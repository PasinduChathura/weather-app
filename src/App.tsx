import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from './views/HomePage/HomePage';
import './App.css';
import WeatherPage from './views/HomePage/WeatherPage/WeatherPage';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Layout>
          <HomePage />
        </Layout>
      </Route>
      <Route path="/weather">
        <Layout>
          <WeatherPage />
        </Layout>
      </Route>
      <Route path="*">
        <Layout>
          <p>Not Found</p>
        </Layout>
      </Route>
    </Switch>
  );
}

export default App;
