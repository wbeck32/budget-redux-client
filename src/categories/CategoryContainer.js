import React from 'react';
import { connect } from 'react-redux';
import { getMyCats } from './category.actions';
import PropTypes from 'prop-types';

import Category from './Category';
import { bindActionCreators } from 'redux';

const CategoryContainer = ({ getMyCats, token }) => <Category />;

CategoryContainer.propTypes = {
  getMyCats: PropTypes.func,
  token: PropTypes.string,
  categories: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getMyCats }, dispatch);

  // return {
  //   cats: () => {
  //     dispatch(getMyCats());
  //   }
  // };
}
function mapStateToProps(state) {
  return {
    token: state.token,
    categories: state.categories
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
