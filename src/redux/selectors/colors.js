import { createSelector } from 'reselect';

export const getMaterialColors = state => state.materialColors;
export const getColors = createSelector(
  getMaterialColors,
  materialColors => {
    return materialColors
      ? Object.keys(materialColors).map(color =>
          typeof materialColors[color] === 'string'
            ? { id: color, value: materialColors[color] }
            : {
                id: color,
                value: materialColors[color]['500'],
              },
        )
      : [];
  },
);

export const getSelectedColor = state => state.selectedColor;
export const getColorPalette = createSelector(
  getMaterialColors,
  getSelectedColor,
  (materialColors, selectedColor) => (selectedColor ? materialColors[selectedColor] : {}),
);
