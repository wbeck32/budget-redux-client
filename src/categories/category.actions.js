import categoryAPI from './categoryAPI';
import { GET_MY_CATS } from './category.constants';

export function getMyCats(payload) {
  return function(dispatch) {
    console.log(4567, payload)

    return categoryAPI.getMyCats(payload)
    .then(results => {
      console.log(22, results)
      dispatch({ type: GET_MY_CATS, payload: results })
    });
    }
  };

