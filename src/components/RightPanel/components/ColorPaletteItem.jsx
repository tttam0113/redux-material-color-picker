import React from 'react';
import PropTypes from 'prop-types';
import { common } from 'utils/colors';
import { getContrastRatio } from 'utils/colorManipulator';

const CONTRAST_THRESHOLD = 3;
const getContrastText = background => {
  const contrastRatio = getContrastRatio(background, common.white);
  return contrastRatio >= CONTRAST_THRESHOLD ? common.white : common.black;
};

const ColorPaletteItem = ({ colorWeight, colorHex, copiedColor, onClick }) => (
  <li
    role="presentation"
    onClick={() => onClick(colorHex)}
    className="color-palette__item"
    style={{ backgroundColor: colorHex, color: getContrastText(colorHex) }}
  >
    <span>{colorWeight}</span>
    <span>{colorHex}</span>
    <span className={`copied-indicator ${copiedColor === colorHex && 'copied-indicator--done'}`}>
      Color copied!
    </span>
  </li>
);

ColorPaletteItem.propTypes = {
  colorHex: PropTypes.string,
  colorWeight: PropTypes.string,
  copiedColor: PropTypes.string,
  onClick: PropTypes.func,
};

export default ColorPaletteItem;
