import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homePage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

import './pages/homepage/homePage.styles.scss';
import { Route, Switch } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
