import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import SignInUp from '../components/SignInUp';
import CategoryContainer from './CategoryContainer';
import EditContainer from './EditContainer';
import TransactionContainer from './TransactionContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <SignInUp />
        <CategoryContainer />
        <EditContainer />
        <TransactionContainer />

      </div>
    );
  }
}

export default App;
