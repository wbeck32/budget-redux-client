import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Category extends Component {

  static propTypes = {
    categories: PropTypes.array,
    getMyCats: PropTypes.func
  };

  componentDidMount() {
  //  this.props.getMyCats();
  //  this.props.categories :getMyCats()});

  }

  render() {
    return (
      <div>
        Category Container
          {this.props.getMyCats({})}
          {/* {this.state.categories} */}

        {/* {this.props.categories.map((cat, i) => (
          <li key={i}>
            <span>{cat.subName}</span>
            <span>{cat.subCatAmount}</span>
          </li>
        ))} */}
      </div>
    );
  }
}
