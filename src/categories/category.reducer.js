import { GET_MY_CATS, CREATE_NEW_CAT } from './category.constants';

export default function categoryReducer(state = [], { type, payload }) {
  // console.log(8787878, state, type, payload)
  switch (type) {
    case GET_MY_CATS:
      return state;
    case CREATE_NEW_CAT:
      return payload;
    default:
      return state;
  }
}
