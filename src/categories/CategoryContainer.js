import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMyCats } from './category.actions';
import Category from './Category';
import PropTypes from 'prop-types';

export class CategoryContainer extends Component {
  static propTypes = {
    getMyCats: PropTypes.func,
    token: PropTypes.string,
    categories: PropTypes.array
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     categories: this.props.categories,
  //     token: this.props.token
  //   };
  // }

  componentWillMount = (async () => {
    const allC = await this.props.getMyCats();
    console.log(22222222, allC)
  })

  render() {
    console.log(666, this.props.categories, typeof this.props.categories);

    const { categories } = this.props;
    return (
      <div>
        {categories.map((cat, i) => (
          <div key={i}>
            <Category category={cat}/>
          </div>
        ))}
      </div>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
