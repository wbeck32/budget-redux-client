import { connect } from 'react-redux';
import Category from './Category';


const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps, null)(Category);
