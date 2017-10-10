import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getMyCats } from './category.actions';
import { bindActionCreators } from 'redux';
import Category from './Category';

export class CategoryContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      categories: this.props.categories,
      token: this.props.token

    };

    // this.handleOnChange = this.handleOnChange.bind(this);
    // this.handleOnSave = this.handleOnSave.bind(this);
    // this.toggleEditMode = this.toggleEditMode.bind(this);
    // this.checkIfHasProps = this.checkIfHasProps.bind(this);
  }

  componentWillMount() {
    console.log(555, this)
    this.props.getMyCats();
  }

render() {
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  (stateProps, dispatchProps, ownProps) => {
    return {
      ...stateProps,
      ...dispatchProps
      // currentId: ownProps.location.pathname.split('/athletes/')[1]
    };
  }
)(CategoryContainer);





// export default connect(mapStateToProps, {getMyCats:getMyCats()})(CategoryContainer);






// export function CategoryContainer({ getMyCats, token }) {
//   console.log(44, getMyCats, token);
//   return getMyCats().then(getMyCats => {
//     console.log(88, getMyCats);

//     return (
//       <div>
//         {/* <Category/> */}
//         Category
//         {/* <li key={props.key}>
//             <span>{props.cat}</span> */}
//         {/* <span>{props.cat.subCatAmount}</span> */}
//         {/* </li> */}
//       </div>
//     );
//   });
// }

// function mapStateToProps(state) {
//   return {
//     token: state.token,
//     categories: state.categories
//   };
// }

