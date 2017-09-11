import { SIGN_UP, SIGN_IN, AUTHORIZED, AUTH_FAILURE, VERIFY } from './auth.constants';

 export default function authReducer(state = null, { type, payload }) {
    switch (type) {
    case SIGN_IN:
      return null;
    case AUTHORIZED:
      return payload;
    case AUTH_FAILURE:
      // console.log('auth failure: ', state, payload);
      return (null);
    default:
      // console.log('default: ', state, payload);
      return state;
  }
}


// case SIGN_UP:
// console.log('sign up: ', state, payload);
// return payload;