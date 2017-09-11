import { SIGN_UP, VERIFY, SIGN_IN, AUTHORIZED, AUTH_FAILURE } from './auth.constants';

export default (state = { authorized: false }, { type, payload }) => {
  switch (type) {
    case SIGN_UP:
      console.log('sign up: ', state, payload);
      return payload;
    case SIGN_IN:
      console.log('sign in: ', state);
      return state;
    case AUTHORIZED:
      console.log('authorized: ', state, payload);
      return (state.authorized = true);
    case AUTH_FAILURE:
      console.log('auth failure: ', state);
      return (state.authorized = false);
    case VERIFY:
      console.log('verify: ', state, payload);
      return state;
    default:
      console.log('default: ', state, type);
      return state;
  }
};
