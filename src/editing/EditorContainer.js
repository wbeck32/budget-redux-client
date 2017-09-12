import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  createNewCat,
  createNewSubcat,
  saveCatChanges,
  saveSubcatChanges
} from './editor.actions';
import Editor from './Editor';

const EditorContainer = ({
  createNewCat,
  createNewSubcat,
  saveCatChanges,
  saveSubcatChanges
}) => <Editor />;

EditorContainer.propTypes = {
  verifyUser: PropTypes.func,
  token: PropTypes.string,
  saveCatChanges: PropTypes.func,
  saveSubcatChanges: PropTypes.func,
  createNewCat: PropTypes.func,
  createNewSubcat: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createNewCat, createNewSubcat, saveCatChanges, saveSubcatChanges }, dispatch);
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
