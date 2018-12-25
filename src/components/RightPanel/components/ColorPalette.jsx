import React from 'react';
import PropTypes from 'prop-types';
import ColorPaletteItem from './ColorPaletteItem';

const ColorPalette = ({ selectedColor = '', palette = {} }) => (
  <div className="color-palette-wrapper">
    <h2 className="color-palette-wrapper__header">{selectedColor}</h2>
    <ol className="color-palette">
      {Object.keys(palette).map(colorWeight => (
        <ColorPaletteItem
          key={colorWeight}
          colorWeight={colorWeight}
          colorHex={palette[colorWeight]}
        />
      ))}
    </ol>
  </div>
);

ColorPalette.propTypes = {
  palette: PropTypes.object,
  selectedColor: PropTypes.string,
};

export default ColorPalette;
