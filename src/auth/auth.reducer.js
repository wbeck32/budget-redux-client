import {
  SIGN_UP,
  SIGN_IN,
  AUTHORIZED,
  AUTH_FAILURE,
  SIGN_OUT
} from './auth.constants';

export default function authReducer(state = null, { type, payload }) {
  switch (type) {
    case SIGN_IN:
      return null;
    case SIGN_UP:
      return payload;
      case SIGN_OUT:
      return null;
    case AUTHORIZED:
      return payload;
    case AUTH_FAILURE:
      return payload;
    default:
      return state;
  }
}
