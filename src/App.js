import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';

import './App.css';
// import { Router, Route } from 'react-router';
import AuthContainer from './auth/AuthContainer';
import CategoryContainer from './categories/CategoryContainer';
import EditorContainer from './editing/EditorContainer';
import TransactionContainer from './transactions/TransactionContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <AuthContainer />
        token: {this.props.token}
        <EditorContainer />
        <CategoryContainer />
        <TransactionContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(
  mapStateToProps,
  null)(App);