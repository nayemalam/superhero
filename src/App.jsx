import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './global.scss';
import Main from './components/Main';
import Details from './components/details/Details';
import FetchSuperhero from './api/FetchSuperhero';

function App () {
  return (
    <div className="app">

      <Router>
        <Main />
        <Switch>
          <Route exact path='/' component={FetchSuperhero}></Route>
          <Route exact path='/details' component={Details}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
