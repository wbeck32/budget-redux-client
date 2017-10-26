import { AUTHORIZED, AUTH_FAILURE } from './auth.constants';
import authAPI from './authAPI';

export function signUp({ payload }) {
  return function(dispatch) {
    return authAPI.signUpNewUser({ payload }).then(
      res => {
        console.log(11111, res.body)
        localStorage.clear('budget');
        const { token, user } = res;
        localStorage.setItem('budget', token);
        dispatch({ type: AUTHORIZED, payload: user });
      },
      error => {
        dispatch({ type: AUTH_FAILURE, payload: error });
      }
    );
  };
}

export function signIn({ payload }) {
  return function(dispatch) {
    return authAPI.signIn({ payload }).then(
      res => {
        console.log(878787, res)
        dispatch({ type: AUTHORIZED, payload: res });
      },
      error => {
        dispatch({ type: AUTH_FAILURE, payload: error });
      }
    );
  };
}
