import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  createNewCat,
  createNewSubcat,
  saveCatChanges,
  saveSubcatChanges,
  getMyCats,
  signOut
} from './editor.actions';
import Editor from './Editor';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createNewCat, createNewSubcat, saveCatChanges, saveSubcatChanges, getMyCats, signOut }, dispatch);

}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    token: state.token
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
