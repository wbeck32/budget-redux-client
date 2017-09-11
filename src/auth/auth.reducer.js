import { SIGN_UP, VERIFY, SIGN_IN, AUTHORIZED, AUTH_FAILURE } from './auth.constants';

export function authReducer(state = { authorized: false }, { type, payload }) {
  switch (type) {
    case SIGN_UP:
      console.log('sign up: ', state, payload);
      return payload;
    case SIGN_IN:
      console.log('sign in: ', state, payload);
      return state;
    case AUTHORIZED:
      console.log('authorized: ', state, payload);
      return (state.authorized = true);
    case AUTH_FAILURE:
      console.log('auth failure: ', state, payload);
      return (state.authorized = false);
    case VERIFY:
      console.log('verify: ', state, payload);
      return (state.authorized = true);
    default:
      console.log('default: ', state, payload);
      return state;
  }
};
