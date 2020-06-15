import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './global.scss';
import Header from './components/header/Header';
import Details from './components/details/Details';
// import FetchSuperhero from './api/FetchSuperhero';
import Main from './components/Main';
import CssBaseline from '@material-ui/core/CssBaseline';


function App () {
  return (
    <div className="app">
      <CssBaseline>
        <Router>
          <Header />
          {/* <Switch> */}
            <Route path='/' component={Main} />
            <Route path='/details' component={Details} />
          {/* </Switch> */}
        </Router>
      </CssBaseline>
    </div>
  );
}

export default App;
