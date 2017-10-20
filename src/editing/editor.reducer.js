import {
  CREATE_NEW_CAT,
  CREATE_NEW_SUBCAT,
  SAVE_CAT_CHANGES,
  SAVE_SUBCAT_CHANGES
} from './editor.constants';

// return [
//   ...state,
//   {
//     text: action.text,
//     completed: false
//   }
// ]

export function editorReducer(state = [], { type, payload }) {
  console.log(989898, state, type, payload, typeof payload);
  switch (type) {
    case CREATE_NEW_CAT:
      console.log('new cat: ', state, payload, typeof payload);
      return payload.body.categories;
    case CREATE_NEW_SUBCAT:
      // console.log('new subcat: ', state.token, payload);
      return payload;
    case SAVE_CAT_CHANGES:
      // console.log('save cat changes: ', state, payload);
      return payload;
    case SAVE_SUBCAT_CHANGES:
      // console.log('save subcat changes: ', state, payload);
      return payload;
    default:
      // console.log('default: ', state, payload);
      return state;
  }
}
