import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {saveCatChanges, saveSubcatChanges} from './editor.actions'
import Editor from './Editor';

const EditorContainer = ( {saveCatChanges, saveSubcatChanges} ) => (
  <Editor />
)

EditorContainer.propTypes = {
  verifyUser: PropTypes.func,
  authorized: PropTypes.bool,
  saveCatChanges: PropTypes.func,
  saveSubcatChanges: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveCatChanges, saveSubcatChanges}, dispatch);
}

const mapStateToProps = state => {
  return {
    authorized: state.authorized
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Editor);
