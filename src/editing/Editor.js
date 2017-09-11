import React from 'react';
import PropTypes from 'prop-types';

export default function Editor() {
  Editor.PropTypes = {
    saveCatChanges: PropTypes.func,
    saveSubcatChanges: PropTypes.func
  }

return (
  <div>
    Editor
    </div>
);

}