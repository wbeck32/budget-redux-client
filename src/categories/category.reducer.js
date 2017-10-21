import { GET_MY_CATS } from './category.constants';

export default function categoryReducer(state = [], { type, payload }) {
  switch (type) {
    case GET_MY_CATS:
      return payload;
    default:
      return state;
  }
}
