import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getMyCats } from './category.actions';

export default function Category({ getMyCats, token }) {
  return getMyCats().then(cats => {
    console.log(88, cats);
    return (
      <div>
        <div>Category Container</div>
      </div>
    );
  });
}

// export default function Category({getMyCats, token }) {
// console.log(44, getMyCats, token)
// return getMyCats()
// .then(cats => {
//   console.log(88, cats);

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
