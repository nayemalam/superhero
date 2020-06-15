// external impors
import React from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
// component imports
import Header from './components/header/Header';
import Details from './components/pages/Details';
import Main from './components/pages/Main';
import NavLinks from './components/navlinks/NavLinks'
// internal css imports
import './global.scss';

withRouter(props => <Main {...props} />)

function App () {
  return (
    <div className="app">
      <CssBaseline>
        <Router>
          <NavLinks />
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
