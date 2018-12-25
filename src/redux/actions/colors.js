// Command actions
export const INIT_COLORS = 'INIT_COLORS';
export const CHANGE_COLOR = 'CHANGE_COLOR';
// Event actions

// Document actions
export const SET_COLORS = 'SET_COLORS';
export const SET_SELECTED_COLOR = 'SET_SELECTED_COLOR';

export const initColors = () => ({
  type: INIT_COLORS,
  payload: {},
  meta: {},
});

export const changeColor = color => ({
  type: CHANGE_COLOR,
  payload: color,
  meta: {},
});

export const setColors = colors => ({
  type: SET_COLORS,
  payload: colors,
  meta: {},
});

export const setSelectedColor = color => ({
  type: SET_SELECTED_COLOR,
  payload: color,
  meta: {},
});
