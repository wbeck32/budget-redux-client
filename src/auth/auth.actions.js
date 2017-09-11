import { SIGN_UP, SIGN_IN, AUTHORIZED, AUTH_FAILURE } from './auth.constants';
// import { signIn } from './auth.reducer';
import authAPI from './authAPI';

export function signUp({ type, payload }) {
    return function(dispatch) {
      dispatch({ type: SIGN_UP, payload: payload });
      return authAPI.signUpNewUser({ payload })
      .then(
        res => {
          dispatch({ type: AUTHORIZED, payload: res.token });
        },
        error => {
          dispatch({ type: AUTH_FAILURE, payload: error.status });
        }
      );
    };
}

export function signIn({type, payload}) {

  return function(dispatch) {
    // dispatch({type: SIGN_IN, payload: payload})
    return authAPI.signIn({payload})
    .then(
      res => {
        dispatch({ type: AUTHORIZED, payload: res.token});
      },
      error => {
        dispatch({ type: AUTH_FAILURE, payload: error.status });
      }
    );
  }
}