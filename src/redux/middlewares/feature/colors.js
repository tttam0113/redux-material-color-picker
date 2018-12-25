import materialColors from './data/materialColors';
import { INIT_COLORS, CHANGE_COLOR, setColors, setSelectedColor } from 'redux/actions/colors';

export default () => next => action => {
  next(action);

  switch (action.type) {
    case INIT_COLORS:
      next([setColors(materialColors), setSelectedColor('red')]);
      break;
    case CHANGE_COLOR:
      next(setSelectedColor(action.payload));
      break;
    default:
      break;
  }
};
