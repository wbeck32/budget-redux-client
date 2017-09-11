import React from 'react';
import PropTypes from 'prop-types';

export default function Editor(props) {
  Editor.PropTypes = {
    saveCatChanges: PropTypes.func,
    saveSubcatChanges: PropTypes.func
  }
console.log(props.authorized)
return (
  <div>
    Editor
    </div>
);

}