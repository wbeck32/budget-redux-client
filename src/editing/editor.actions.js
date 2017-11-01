import editorAPI from './editorAPI';
import { CREATE_NEW_CAT, GET_MY_CATS} from './editor.constants.js';
import { SIGN_OUT } from '../auth/auth.constants'


export function createNewCat(payload) {
  return function(dispatch) {
    return editorAPI
      .createNewCat(payload)
      .then(res => {
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
  }
  export function signOut() {
    return function(dispatch) {
      localStorage.removeItem('budget');
      dispatch({ type: SIGN_OUT, payload: null });
    };
  }



export function createNewSubcat({ type, payload }) {}

export function saveCatChanges({ type, payload }) {}

export function saveSubcatChanges({ type, payload }) {}
