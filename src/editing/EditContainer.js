import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


export function EditContainer(){

  EditContainer.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    signUp: PropTypes.func
  };
return (<div> EditContainer </div>);
}

export default connect(state => ({

}))(EditContainer);