import React from 'react';
// import PropTypes from 'prop-types';
import ColorPalette from './components/ColorPalette';

const RightPanel = props => (
  <div className="material-color-picker__right-panel">
    <ColorPalette {...props} />
  </div>
);

export default RightPanel;
