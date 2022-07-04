import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import phonebookReducer from '../redux/contacts/reducer';
import authReducer from '../redux/auth/auth-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    phonebook: phonebookReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
