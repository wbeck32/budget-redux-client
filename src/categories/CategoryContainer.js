import React from 'react';
import { connect } from 'react-redux';
import { getMyCats } from './category.actions';
import Category from './Category';
import PropTypes from 'prop-types';

const CategoryContainer = async () => <Category />;

CategoryContainer.propTypes = {
  getMyCats: PropTypes.func
};

const mapStateToProps = state => {
  return {
    token: state.token,
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMyCats: () => {
      dispatch(getMyCats());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
