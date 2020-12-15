import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from 'redux/reducers';

const persistConfig = {
 key: 'root',
 storage: storage,
 whitelist: ['auth'],
 stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const storeFactory = () => createStore(pReducer, composeEnhancers(applyMiddleware(thunk), applyMiddleware(logger)));

export const store = storeFactory();
export const persistor = persistStore(store);