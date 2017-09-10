import { SIGN_UP } from './auth.constants';
import authAPI from './authAPI';

export function signUp({ type, payload }) {
  console.log('in signup action: ', type, payload);
    return function(dispatch) {
      dispatch({ type: SIGN_UP, payload: payload });

      return authAPI.signUpNewUser({ payload })
      .then(
        user => {
          console.log('user: ', user);
          // dispatch({ type: actions.FETCHED_ALBUMS, payload: albums });
        },
        error => {
          // dispatch({ type: actions.FETCHED_ALBUMS_ERROR, payload: error.error });
        }
      );
    };
}

//   console.log('in signup action: ', type, payload);
//   return dispatch => {
//    return dispatch(authApi.signUpNewUser( ({payload}) => {
//       // const res =  await dispatch(verify(type, payload));
//       // return res;
//     }));
//   };

// }

// export function makeGetAlbums(api) {
//   return function() {
//     return function(dispatch) {
//       dispatch({ type: actions.FETCHING_ALBUMS });

//       return api.getAll()
//         .then(
//           albums => {
//             dispatch({ type: actions.FETCHED_ALBUMS, payload: albums });
//           },
//           error => {
//             dispatch({ type: actions.FETCHED_ALBUMS_ERROR, payload: error.error });
//           }
//         );
//     };
//   };
// }

// export function update(name, value) {
//   return dispatch => dispatch({
//     type: c.FORM_UPDATE_VALUE,
//     name, value
//   });
// }
