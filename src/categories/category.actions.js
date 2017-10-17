import categoryAPI from './categoryAPI';
import { GET_MY_CATS } from './category.constants';

export function getMyCats() {
  return function(dispatch) {
    console.log(6667)
    return categoryAPI.getMyCats()
    .then(results => {
      console.log(999, results)
      dispatch({ type: GET_MY_CATS, payload: results })
    });
    }
  };

