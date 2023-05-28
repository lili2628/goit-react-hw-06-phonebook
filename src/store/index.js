import { configureStore } from '@reduxjs/toolkit';
import { persistedContactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { persistStore } from 'redux-persist';

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filter: filterReducer,
    },
});

export const persistor = persistStore(store);