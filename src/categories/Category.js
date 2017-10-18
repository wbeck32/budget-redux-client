import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { getMyCats } from './category.actions';

export default class Category extends Component {
  static propTypes = {
    categories: PropTypes.array,
    getMyCats: PropTypes.func
  };

  componentWillMount() {
    // console.log(444, this)
    this.props.getMyCats();
    // console.log(22222222, allC)
  }

  render() {
    const { categories } = this.props;
    console.log(4545455, categories, typeof categories);
    return (
      <div>
        {categories.map((cat, i) => {
          return (<div key={i}>category: {cat.name}</div>);
        })}
      </div>
    );
  }
}
