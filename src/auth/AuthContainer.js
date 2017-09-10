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

// const mapDispatchToProps = (dispatch) => {
//   return {
//       signUp: (email, password) => dispatch(signUp(email, password))
//   };
// };

const mapStateToProps = state => {
  return {
    signUp: state.signUp
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

