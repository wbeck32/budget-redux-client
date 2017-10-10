import React from 'react';
import { connect } from 'react-redux';
import { getMyCats } from './category.actions';
import { bindActionCreators } from 'redux';
import Category from './Category';

export function CategoryContainer({ getMyCats, token }) {
  console.log(44, getMyCats, token);
  return getMyCats().then(getMyCats => {
    console.log(88, getMyCats);

    return (
      <div>
        {/* <Category/> */}
        Category
        {/* <li key={props.key}>
            <span>{props.cat}</span> */}
        {/* <span>{props.cat.subCatAmount}</span> */}
        {/* </li> */}
      </div>
    );
  });
}

function mapStateToProps(state) {
  return {
    token: state.token,
    categories: state.categories
  };
}

export default connect(mapStateToProps, null)(Category);
