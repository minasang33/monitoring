import './App.css';
import React, {useContext, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './assets/css/bootstrap.min.css';
import './assets/css/styleguide.css';
import './assets/css/artboard.css';
import 'semantic-ui-css/semantic.min.css';

import LogMng from './Components/View/LogDetail';
import Login from './Components/View/Login';
import GroupMng from './Components/View/GroupMng';
import FlexLayout from "flexlayout-react";
import Welcome from "./Components/Welcome/Welcome";
import Main from "./Main";


function App() {
  // Context

  return (
    <div>
      <Router>
      <Switch>
      <Route path='/logmng' component={LogMng}/>
      <Route path='/groupmng' component={GroupMng}/>
      <Route path='/main' component={Main}/>
      <Route path='/' component={Login}/>
      </Switch>
      </Router>

    </div>
  )
}

export default App;
