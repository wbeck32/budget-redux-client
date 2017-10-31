import editorAPI from './editorAPI';
import { CREATE_NEW_CAT, GET_MY_CATS} from './editor.constants.js';
// import {GET_MY_CATS} from '../categories/category.constants';


export function createNewCat(payload) {
  return function(dispatch) {
    console.log(888, payload)
    return editorAPI
      .createNewCat(payload)
      .then(res => {
        console.log(8888, res)
        dispatch({type: CREATE_NEW_CAT, payload: res})
  })
  }
}
export function getMyCats() {
  return function(dispatch) {
    return editorAPI.getMyCats()
    .then(results => {
      dispatch({ type: GET_MY_CATS, payload: results })
    });
    }
  };



export function createNewSubcat({ type, payload }) {}

export function saveCatChanges({ type, payload }) {}

export function saveSubcatChanges({ type, payload }) {}
