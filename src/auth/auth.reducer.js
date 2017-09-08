import { SIGN_IN, SIGN_UP, VERIFY, AUTH_FAILURE } from './auth.constants';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SIGN_UP:
      return state;
    case SIGN_IN:
      return state;
    case VERIFY:
      return state;
    case AUTH_FAILURE:
      return state;
    default:
      return state;
  }
};
