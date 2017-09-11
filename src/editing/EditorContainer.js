import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(
  mapStateToProps,
  { createNewCat, createNewSubcat, saveCatChanges, saveSubcatChanges }
  // merge Props
  // (stateProps, dispatchProps, ownProps) => {
  //   // derive the data here
  //   console.log(stateProps, dispatchProps, ownProps);
  // }
)(Editor);
