import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
// import { Router, Route } from 'react-router';
// import { bindActionCreators } from 'redux';

import AuthContainer from './auth/AuthContainer';
import CategoryContainer from './categories/CategoryContainer';
import EditorContainer from './editing/EditorContainer';
import TransactionContainer from './transactions/TransactionContainer';

class App extends Component {
  static propTypes = {
    token: PropTypes.string,
    categories: PropTypes.array
    };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {!this.props.token && <AuthContainer />}
        <div>
          {this.props.token && (
            <div>
              {' '}
              <EditorContainer />
            </div>
          )}
          {this.props.token && (
            <div>
              {' '}
              <CategoryContainer />
            </div>
          )}
          {this.props.token && (
            <div>
              {' '}
              <TransactionContainer />
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token,
    categories: state.categories
  };
};

export default connect(mapStateToProps, null)(App);
