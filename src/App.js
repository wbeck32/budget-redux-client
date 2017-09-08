import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route } from 'react-router';
import SignInUp from './auth/SignInUp';
import CategoryContainer from './categories/CategoryContainer';
import EditContainer from './editing/EditContainer';
import TransactionContainer from './transactions/TransactionContainer';

class App extends Component {



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        {/* <Router>
    <Route />
  </Router> */}

        <SignInUp />
        <CategoryContainer />
        <EditContainer />
        <TransactionContainer />

      </div>
    );
  }
}

