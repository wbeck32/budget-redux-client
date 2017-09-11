import { SAVE_CAT_CHANGES, SAVE_SUBCAT_CHANGES } from './editor.constants';

export function editReducer(state = {  }, { type, payload }) {
  switch (type) {
    case SAVE_CAT_CHANGES:
      console.log('save cat changes: ', state, payload);
      return payload;
    case SAVE_SUBCAT_CHANGES:
      console.log('save subcat changes: ', state, payload);
      return payload;
    default:
      console.log('default: ', state, payload);
      return payload;
  }
}
