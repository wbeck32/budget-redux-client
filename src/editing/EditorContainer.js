import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {createNewCat, createNewSubcat, saveCatChanges, saveSubcatChanges} from './editor.actions'
import Editor from './Editor';
import verifyUser from '../helpers/verify';


const EditorContainer = ( {createNewCat, createNewSubcat,saveCatChanges, saveSubcatChanges} ) => (
  <Editor />
)

checkUser();

async function checkUser() {
  const v = await verifyUser();
console.log('v: ', v);

}

EditorContainer.propTypes = {
  verifyUser: PropTypes.func,
  token: PropTypes.string,
  saveCatChanges: PropTypes.func,
  saveSubcatChanges: PropTypes.func,
  createNewCat: PropTypes.func,
  createNewSubcat: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createNewCat, createNewSubcat, saveCatChanges, saveSubcatChanges}, dispatch);
}

const mapStateToProps = state => {
  console.log(state.token)

  return {
    token: state.token
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Editor);
