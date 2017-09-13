import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMyCats } from './category.actions';
import Category from './Category';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getMyCats }, dispatch);
}

const mapStateToProps = state => {
  return {
    token: state.token,
    categories: state.categories
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
