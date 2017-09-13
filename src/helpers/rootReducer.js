import  authReducer  from './../auth/auth.reducer';
import { editorReducer } from './../editing/editor.reducer';
import categoryReducer from './../categories/category.reducer'
import { combineReducers } from 'redux';

export default combineReducers({
  token: authReducer,
  editorReducer: editorReducer,
  categoryReducer: categoryReducer
});
