import React from 'react';
import PropTypes from 'prop-types';
import ColorItem from './ColorItem';

const ColorSelector = ({ colors, onChange, selectedColor = '' }) => (
  <ol className="color-selector">
    {colors.map(color => (
      <ColorItem
        key={color.id}
        color={color.value}
        checked={color.id === selectedColor}
        onChange={() => onChange(color.id)}
      />
    ))}
  </ol>
);

ColorSelector.propTypes = {
  colors: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  selectedColor: PropTypes.string,
};

ColorSelector.defaultProps = {
  onChange: () => {},
};

export default ColorSelector;
