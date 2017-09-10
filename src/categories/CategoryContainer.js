import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


export function CategoryContainer(){
  CategoryContainer.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    signUp: PropTypes.func
  };


return (<div> CategoryContainer </div>);
}


export default connect(state => ({

}))(CategoryContainer);