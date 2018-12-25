import React from 'react';
import PropTypes from 'prop-types';
import { common } from 'utils/colors';
import { getContrastRatio } from 'utils/colorManipulator';

const getContrastText = background => {
  const contrastThreshold = 3;
  const contrastRatio = getContrastRatio(background, common.white);
  return contrastRatio >= contrastThreshold ? common.white : common.black;
};

const ColorPaletteItem = ({ colorWeight, colorHex }) => (
  <li className="color-palette__item" style={{ backgroundColor: colorHex, color: getContrastText(colorHex) }}>
    <span>{colorWeight}</span>
    <span>{colorHex}</span>
  </li>
);

ColorPaletteItem.propTypes = {
  colorHex: PropTypes.string,
  colorWeight: PropTypes.string,
};

export default ColorPaletteItem;
