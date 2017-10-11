import React from 'react';
import PropTypes from 'prop-types';

export default function Category({ category }) {
  Category.propTypes = {
    categories: PropTypes.array
  };
  return (
    <div>
      <div className="flexrow">
      {category}
      </div>
    </div>
  );
}

// const mapStateToProps = state => {
//   console.log(565656, state)
//   return {
//     categories: state.categories
//   };
// };

// export default connect(mapStateToProps, null)(Category);

// export default class Category extends Component {
//   static propTypes = {
//     getMyCats: PropTypes.func,
//     token: PropTypes.string
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       token: props.token
//     };
//   }

//   componentDidMount() {

//     console.log(this, this.props);

//     // return this.props.getMyCats()
//     // .then(getMyCats2 => {
//     //   console.log(88, getMyCats2);
//     //   return getMyCats2;

//     // })
//     }

// render() {

//   return (
//     <div>
//       Category
//       {/* <li key={props.key}>
//         <span>{props.cat}</span> */}
//       {/* <span>{props.cat.subCatAmount}</span> */}
//       {/* </li> */}
//     </div>
//   );

// }

//   }

// render() {

//   return (
//     <div>
//       <div>Category Container</div>
//     </div>
//   );

// }

// export default function Category({getMygetMyCats, token }) {
// console.log(44, getMyCats, token)
// return getMyCats()
// .then(getMyCats => {
//   console.log(88, getMyCats);

//     return (
//       <div>Category
//           {/* <li key={props.key}>
//             <span>{props.cat}</span> */}
//             {/* <span>{props.cat.subCatAmount}</span> */}
//           {/* </li> */}
//       </div>
// );
//   })
// }

// import React, {Component} from 'react';
// import PropTypes from 'prop-types';

// export default class Editor extends Component {

//   static propTypes = {
//     saveCatChanges: PropTypes.func,
//     saveSubcatChanges: PropTypes.func,
//     createNewCat: PropTypes.func,
//     createNewSubcat: PropTypes.func
//     }

// render() {
// return (
//  <div>

//   <div>
//     Create new category

//     <form
//         onSubmit={event => {
//           event.preventDefault();
//           const form = event.target;
//           const { name, catAmount } = form.elements;
//           this.props.createNewCat({ name: name.value, catAmount: catAmount.value, catRemaining: catAmount.value } );
//           form.reset();
//         }}>
//         <input type="text" name="name" placeholder="name" />
//         <input type="text" name="catAmount" placeholder="amount budgeted for this category" />
//         <button type="submit" name="submit" />
//       </form>
//     </div>
//     </div>
// )}
// }
