// external impors
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
// component imports
import Header from './components/header/Header';
import Details from './components/pages/Details';
import Main from './components/pages/Main';
// internal css imports
import './global.scss';

function App () {
  return (
    <div className="app">
      <CssBaseline>
        <Router>
          <Header />

          <Route path='/' component={Main} />
          <Route path='/details' component={Details} />
        </Router>
      </CssBaseline>
    </div>
  );
}

export default App;
