
import './App.css';
import React  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/css/bootstrap.min.css';
import './assets/css/styleguide.css';
import './assets/css/artboard.css';
import LogMng from './LogMng2';
import Login from './Login';

function App(){

  return(
  <div>
    <Router>

        <Route path='/logmng' component={LogMng} />
        <Route path='/' component={Login} />

    </Router>

  </div>
  )
}

export default App;
