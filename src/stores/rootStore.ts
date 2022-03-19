import AsyncStorage from '@react-native-community/async-storage';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PersistConfig,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import rootReducer, {RootState} from '../reducers';
import {logger} from './middlewares/logger';

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['test'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const defaultMiddleware = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
});

const middleware = [...defaultMiddleware, ReduxThunk];

if (__DEV__) {
  middleware.push(logger);
}

const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);

export {store, persistor};
