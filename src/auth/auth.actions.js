import { AUTHORIZED, AUTH_FAILURE } from './auth.constants';
import authAPI from './authAPI';

export function signUp({ payload }) {
  return function(dispatch) {
    return authAPI.signUpNewUser({ payload }).then(
      res => {
        dispatch({ type: AUTHORIZED, payload: res.text });
      },
      error => {
        dispatch({ type: AUTH_FAILURE, payload: error.status });
      }
    );
  };
}

export function signIn({ payload }) {
  return function(dispatch) {
    return authAPI.signIn({ payload }).then(
      res => {
        console.log('signin: ', res);
        dispatch({ type: AUTHORIZED, payload: res });
      },
      error => {
        dispatch({ type: AUTH_FAILURE, payload: error.status });
      }
    );
  };
}
