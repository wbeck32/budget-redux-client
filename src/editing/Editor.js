import React from 'react';
import PropTypes from 'prop-types';
import {CREATE_NEW_CAT} from './editor.constants'

export default function Editor({createNewCat, createNewSubcat,saveCatChanges, saveSubcatChanges, token}) {

  Editor.propTypes = {
    saveCatChanges: PropTypes.func,
    saveSubcatChanges: PropTypes.func,
    createNewCat: PropTypes.func,
    createNewSubcat: PropTypes.func,
    token: PropTypes.String
  }

return (
  <div>
    Create new category

    <form
        onSubmit={event => {
          event.preventDefault();
          const form = event.target;
          const { name, catAmount } = form.elements;
          createNewCat({
            type: CREATE_NEW_CAT,
            payload: { name: name.value, catAmount: catAmount.value, catRemaining: catAmount.value }
          });
          form.reset();
        }}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="catAmount" placeholder="amount budgeted for this category" />
        <button type="submit" name="submit" />
      </form>
    </div>
);

}
