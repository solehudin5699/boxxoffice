import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import indexReducer from './reducers/';

const logger = createLogger();
const enhancer = applyMiddleware(thunkMiddleware, logger);

const store = createStore(indexReducer, enhancer);

export { store };
