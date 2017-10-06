import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


export function TransactionContainer(){
  TransactionContainer.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    signUp: PropTypes.func
  };
return (<div> TransactionContainer </div>);
}


export default connect(state => ({

}))(TransactionContainer);