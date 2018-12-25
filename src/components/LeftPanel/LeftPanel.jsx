import React from 'react';
// import PropTypes from 'prop-types';
import ColorSelector from './components/ColorSelector';

const LeftPanel = props => (
  <div className="material-color-picker__left-panel">
    <ColorSelector {...props} />
  </div>
);

LeftPanel.propTypes = {};

export default LeftPanel;
