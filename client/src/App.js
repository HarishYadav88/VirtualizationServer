import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';


import VirtualizationsPage from './containers/VirtualizationsPage';
import EditVirtualizationPage from './containers/EditVirtualizationPage';
import VirtualizationModal from './containers/modaltest';

import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <br />
          <div className="container">
          <Switch>
              <Route path="/virtualizations/undeploy/:virtualizationID" exact component={VirtualizationModal}/>            
              <Route path="/virtualizations" exact component={VirtualizationsPage}/>
              <Route path="/virtualizations/edit/:virtualizationID" exact component={EditVirtualizationPage}/>
              <Redirect to="/virtualizations" />
          </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
