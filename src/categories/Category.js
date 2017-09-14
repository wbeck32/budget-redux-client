import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default function Category(props) {

    return (
      <div>
          <li key={props.key}>
            <span>{props.cat}</span>
            {/* <span>{props.cat.subCatAmount}</span> */}
          </li>
      </div>
    );
  }

