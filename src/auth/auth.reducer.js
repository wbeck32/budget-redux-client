import { SIGN_UP, VERIFY, SIGN_IN, AUTH_FAILURE } from './auth.constants';

// const initialState = {
//   authorized: false
// }

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SIGN_UP:
      console.log('sign up: ', state, payload);
      return payload;
    case SIGN_IN:
      console.log('sign in: ', state);
      return state;
    case VERIFY:
      console.log('verify: ', state, payload);
      return state;
    case AUTH_FAILURE:
      console.log('auth failure: ', state);
      return state;
    default:
      console.log('default: ', state, type);
      return state;
  }
};
