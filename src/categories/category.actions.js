import categoryAPI from './categoryAPI';
import { GET_MY_CATS, CREATE_NEW_CAT } from './category.constants';

export function getMyCats() {
  return function(dispatch) {
    const token = localStorage.getItem('budget')
    return categoryAPI.getMyCats().set('Authorization', token)
    .then(results => {
      dispatch({ type: GET_MY_CATS, payload: results })
    });
    }
  };

  export function createNewCat() {
    return function(dispatch) {
      return categoryAPI.createNewCat()
      .then(results => {
        dispatch({ type: CREATE_NEW_CAT, payload: results })
      });
      }
  }

