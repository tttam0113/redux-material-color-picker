import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { initColors, changeColor } from 'redux/actions/colors';
import { getColors, getSelectedColor, getColorPalette } from 'redux/selectors/colors';
import LeftPanel from 'components/LeftPanel';
import RightPanel from 'components/RightPanel';

class AppView extends React.Component {
  componentWillMount() {
    this.props.initColors();
  }

  handleChangeColor = color => {
    this.props.changeColor(color);
  };

  render() {
    const { colors, selectedColor, palette } = this.props;
    return (
      <div className="material-color-picker">
        <LeftPanel
          colors={colors}
          selectedColor={selectedColor}
          onChange={this.handleChangeColor}
        />
        <RightPanel selectedColor={selectedColor} palette={palette} />
      </div>
    );
  }
}

AppView.propTypes = {
  changeColor: PropTypes.func.isRequired,
  colors: PropTypes.array,
  initColors: PropTypes.func.isRequired,
  palette: PropTypes.object,
  selectedColor: PropTypes.string,
};

AppView.defaultProps = {
  colors: [],
};

const mapStateToProps = state => ({
  colors: getColors(state),
  palette: getColorPalette(state),
  selectedColor: getSelectedColor(state),
});

const mapDispatchToProps = {
  changeColor,
  initColors,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppView);
