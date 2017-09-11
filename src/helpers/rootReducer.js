import { authReducer } from './../auth/auth.reducer';
import { editorReducer } from './../editing/editor.reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  authReducer: authReducer,
  editorReducer: editorReducer
});
