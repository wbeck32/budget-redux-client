import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { signUp } from './auth.actions';
import Auth from './Auth';


const AuthContainer = ( {signUp} ) => (
  <Auth onSubmit={signUp}/>
)

AuthContainer.propTypes = {
  signUp: PropTypes.func
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signUp }, dispatch);
}


const mapStateToProps = state => {
  return {
    signUp: state.signUp,
    authorized: state.authorized
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

