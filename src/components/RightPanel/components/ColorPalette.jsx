import React from 'react';
import PropTypes from 'prop-types';
import * as clipboard from 'clipboard-polyfill';
import ColorPaletteItem from './ColorPaletteItem';

class ColorPalette extends React.Component {
  state = {
    copiedColor: '',
  };

  handleOnClick = color => {
    clipboard.writeText(color).then(
      () => {
        console.log('Copied Color: ', color);
        this.setState(() => ({ copiedColor: color }));
      },
      () => console.error('Unable to write to clipboard. :-('),
    );
  };

  render() {
    const { selectedColor = '', palette = {} } = this.props;
    return (
      <div className="color-palette-wrapper">
        <h2 className="color-palette-wrapper__header">{selectedColor}</h2>
        <ol className="color-palette">
          {Object.keys(palette).map(colorWeight => (
            <ColorPaletteItem
              key={`${selectedColor}-${colorWeight}`}
              colorWeight={colorWeight}
              colorHex={palette[colorWeight]}
              onClick={this.handleOnClick}
              copiedColor={this.state.copiedColor}
            />
          ))}
        </ol>
      </div>
    );
  }
}

ColorPalette.propTypes = {
  palette: PropTypes.object,
  selectedColor: PropTypes.string,
};

export default ColorPalette;
