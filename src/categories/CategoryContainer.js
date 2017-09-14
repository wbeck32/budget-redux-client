import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { getMyCats } from './category.actions';
import Category from './Category';

export const CategoryContainer = async (props) => {
  const myCats = await props.cats();
  // const myCats = ['ABC', 'NJU'];
  console.log('myCats: ', myCats, typeof myCats);
  const myMap = myCats.map((cat, i) => {
    return <Category key={i} cat={cat} />;
  });

  return (
    <div>
      PROPS
      {myMap}
    </div>
  );
};

CategoryContainer.propTypes = {
  getMyCats: PropTypes.func,
  token: PropTypes.string,
  categories: PropTypes.object,
  cats: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return {
    cats: () => {
      dispatch(getMyCats());
    }
    // return bindActionCreators({ getMyCats }, dispatch);
  };
}

const mapStateToProps = state => {
  return {
    token: state.token,
    categories: state.categories
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
