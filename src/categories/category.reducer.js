import { GET_MY_CATS, CREATE_NEW_CAT } from './category.constants';

export default function categoryReducer(state = [], { type, payload }) {
  switch (type) {
    case GET_MY_CATS:
      return payload;
    case CREATE_NEW_CAT:
      return payload;
    default:
      return state;
  }
}
