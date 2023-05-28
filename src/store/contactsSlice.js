import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { initialContacts } from 'data/contacts';




const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: initialContacts,
    },
    reducers: {
        addContact(state, action) {
            if (state.contacts.find(contact => contact.name.toLowerCase() === action.payload.name.toLowerCase())) {
                alert(`${action.payload.name} is already in contact`);
            } else {
                state.contacts = [
                    {
                        id: action.payload.id,
                        name: action.payload.name,
                        number: action.payload.number,
                    },
                    ...state.contacts];
            };
            },

        deleteContact(state, action) {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id);
        },
    },   
});

const persistConfig = {
  key: 'contacts',
  storage,
};


const contactReducer = contactsSlice.reducer;

export const { addContact, deleteContact } = contactsSlice.actions;
export const persistedContactsReducer = persistReducer(persistConfig, contactReducer);



 