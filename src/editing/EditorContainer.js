import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  createNewCat,
  createNewSubcat,
  saveCatChanges,
  saveSubcatChanges,
  getMyCats
} from './editor.actions';
import Editor from './Editor';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createNewCat, createNewSubcat, saveCatChanges, saveSubcatChanges, getMyCats }, dispatch);

}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
