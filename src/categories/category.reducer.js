import { GET_MY_CATS } from './category.constants';

export default function categoryReducer(state = {},{ type, payload }) {
  console.log(state, type, payload);
  switch (type) {
    case GET_MY_CATS:
    console.log([...state, payload])
      return [...state, payload];
    default:
      return state;
  }
}