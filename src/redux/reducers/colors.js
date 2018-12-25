import { SET_COLORS, SET_SELECTED_COLOR } from '../actions/colors';

const initialState = {
  materialColors: {},
  selectedColor: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COLORS:
      return {
        ...state,
        materialColors: action.payload,
      };
    case SET_SELECTED_COLOR:
      return {
        ...state,
        selectedColor: action.payload,
      };
    default:
      return state;
  }
};
