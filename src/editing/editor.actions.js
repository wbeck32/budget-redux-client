import editorAPI from './editorAPI';
import { CREATE_NEW_CAT} from './editor.constants.js';
import {GET_MY_CATS} from '../categories/category.constants';


export function createNewCat(payload) {
  return function(dispatch) {
    return editorAPI
      .createNewCat(payload)
      .then(res => {
        dispatch({type: CREATE_NEW_CAT, payload: res.body})
        dispatch({type: GET_MY_CATS, payload: res.body})
  })
  }
}

export function createNewSubcat({ type, payload }) {}

export function saveCatChanges({ type, payload }) {}

export function saveSubcatChanges({ type, payload }) {}
