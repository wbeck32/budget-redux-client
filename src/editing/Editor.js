import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Editor extends Component {

  static propTypes = {
    saveCatChanges: PropTypes.func,
    saveSubcatChanges: PropTypes.func,
    createNewCat: PropTypes.func,
    createNewSubcat: PropTypes.func,
    getMyCats: PropTypes.func
    }


    componentWillMount() {
      this.props.getMyCats();
    }


render() {
return (
 <div>

  <div>
    Create new category

    <form
        onSubmit={event => {
          event.preventDefault();
          const form = event.target;
          const { name, catAmount } = form.elements;
          this.props.createNewCat({ name: name.value, catAmount: catAmount.value, catRemaining: catAmount.value } );
          form.reset();
        }}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="catAmount" placeholder="amount budgeted for this category" />
        <button type="submit" name="submit" />
      </form>
    </div>
    </div>
)}
}

