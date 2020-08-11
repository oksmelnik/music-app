import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from 'reducers';
import initialState from './initialState';

const middlewares = [thunk];

createStore(rootReducer, initialState, applyMiddleware(...middlewares));
