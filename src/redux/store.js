import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { fetchCollectionStart } from './shop/shop.saga';

import rootReducer from './root-reducer';

const sagaMiddlware = createSagaMiddleware();

const middlewares = [sagaMiddlware, logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddlware.run(fetchCollectionStart);

export const persistor = persistStore(store);


export default {store, persistor};