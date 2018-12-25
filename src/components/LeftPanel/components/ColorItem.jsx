import React from 'react';
import PropTypes from 'prop-types';

const ColorItem = ({ color, onChange, checked = false }) => (
  <li>
    <input type="radio" checked={checked} readOnly />
    <label style={{ color }} onClick={onChange} />
  </li>
);

ColorItem.propTypes = {
  checked: PropTypes.bool,
  color: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default ColorItem;
