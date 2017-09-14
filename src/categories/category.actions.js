import categoryAPI from './categoryAPI';
import { GET_MY_CATS } from './category.constants';

export function getMyCats() {
  return function(dispatch) {
    return categoryAPI.getMyCats()
    .then(res => {dispatch({ type: GET_MY_CATS, payload: res });
    });
  };
}