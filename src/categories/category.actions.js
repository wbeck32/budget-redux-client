import categoryAPI from './categoryAPI';
import { GET_MY_CATS } from './category.constants';

export function getMyCats() {
  console.log(6767)
  return function(dispatch) {
    return categoryAPI.getMyCats()
    .then(results => {
      console.log(22, results)
      dispatch({ type: GET_MY_CATS, payload: results })
    });
    }
  };

