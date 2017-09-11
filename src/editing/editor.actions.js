import { VERIFY, CREATE_NEW_CAT } from './editor.constants';
import editorAPI from './editorAPI';

export async function createNewCat({ type, payload }) {
  const v = await editorAPI.verifyUser();
  console.log('v: ', v);
  return function(dispatch) {
    // dispatch({ type: VERIFY });

    return editorAPI
      .createNewCat({ payload })
      .then(res => console.log('res: ', res));
  };
}

export function createNewSubcat({ type, payload }) {}

export function saveCatChanges({ type, payload }) {}

export function saveSubcatChanges({ type, payload }) {}
