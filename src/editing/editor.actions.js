import editorAPI from './editorAPI';
import { CREATE_NEW_CAT} from './editor.constants.js';


export function createNewCat(payload) {
  console.log('createNewCat: ', payload)
  return function(dispatch) {
    return editorAPI
      .createNewCat(payload)
      .then(res => dispatch({type: CREATE_NEW_CAT, payload: res}));
  };
}

export function createNewSubcat({ type, payload }) {}

export function saveCatChanges({ type, payload }) {}

export function saveSubcatChanges({ type, payload }) {}
