import { SIGN_UP, AUTHORIZED, AUTH_FAILURE } from './auth.constants';
import authAPI from './authAPI';

export function signUp({ type, payload }) {
    return function(dispatch) {
      dispatch({ type: SIGN_UP, payload: payload });

      return authAPI.signUpNewUser({ payload })
      .then(
        authorized => {
          dispatch({ type: AUTHORIZED, payload: authorized });
        },
        error => {
          dispatch({ type: AUTH_FAILURE, payload: error.error });
        }
      );
    };
}