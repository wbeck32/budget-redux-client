import editorAPI from './editorAPI';

export function createNewCat({ type, payload }) {

  return function(dispatch) {

    return editorAPI
      .createNewCat({ payload })
      .then(res => console.log('res: ', res));
  };
}

export function createNewSubcat({ type, payload }) {}

export function saveCatChanges({ type, payload }) {}

export function saveSubcatChanges({ type, payload }) {}
