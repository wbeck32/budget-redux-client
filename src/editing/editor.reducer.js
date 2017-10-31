import {
  CREATE_NEW_CAT,
  CREATE_NEW_SUBCAT,
  SAVE_CAT_CHANGES,
  SAVE_SUBCAT_CHANGES,
  GET_MY_CATS
} from './editor.constants';

export function editorReducer(state = [], { type, payload }) {
  console.log(8787878, state, type, payload)

  switch (type) {
    case GET_MY_CATS:
    return payload;
    case CREATE_NEW_CAT:
      console.log('new cat: ', type, payload, typeof payload);
      return payload;
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
