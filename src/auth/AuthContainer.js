import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { signUp, signIn } from './auth.actions';
import Auth from './Auth';


const AuthContainer = ( {signUp, signIn, error} ) => (
  <Auth />
)

AuthContainer.propTypes = {
  signUp: PropTypes.func,
  signIn: PropTypes.func
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signUp, signIn }, dispatch);
}

const mapStateToProps = state => {
  return {
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

