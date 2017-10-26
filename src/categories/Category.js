import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Category extends Component {
  static propTypes = {
    categories: PropTypes.array,
    getMyCats: PropTypes.func
    };

  componentWillMount() {
    this.props.getMyCats();
  }

  render() {
    const { categories } = this.props;
    if (categories) {
      return (
        <div>
          {categories.map((cat, i) => {
            return <div key={i}>category: {cat.name}</div>;
          })}
        </div>
      );
    } else {
      return <div>Add some categories</div>;
    }
  }
}
