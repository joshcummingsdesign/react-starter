import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reduxThunk from 'redux-thunk';
import { rootReducer } from '@state/root';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  whitelist: ['auth', 'locale'],
  storage
};

export const history = createBrowserHistory();

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(reduxThunk)));

export const persistor = persistStore(store);

export default store;
