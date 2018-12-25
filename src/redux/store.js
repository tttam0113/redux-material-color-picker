import { createStore, applyMiddleware, compose } from 'redux';
import actionSplitterMiddleware from './middlewares/core/actionSplitter';
import loggerMiddleware from './middlewares/core/logger';
import colorsMiddleware from './middlewares/feature/colors';
import colorsReducer from './reducers/colors';

const rootReducer = colorsReducer;

const featureMiddlewares = [colorsMiddleware];
const coreMiddlewares = [
  actionSplitterMiddleware,
  loggerMiddleware,
];

const composeEnhancers = compose;

const enhancer = composeEnhancers(applyMiddleware(...featureMiddlewares, ...coreMiddlewares));

export default createStore(rootReducer, {}, enhancer);
