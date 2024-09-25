import { createSlice } from '@reduxjs/toolkit';
// import { addContact } from "../../redux/actions";

const slice = createSlice({
    // Ім'я слайсу
    name: "contactSlice",
    // Початковий стан редюсера слайсу
    initialState: {
        contacts: [
                    {"id": "id-1", "username": "Rosie Simpson", "number": "459-12-56"},
                    {"id": "id-2", "username": "Hermione Kline", "number": "443-89-12"},
                    {"id": "id-3", "username": "Eden Clements", "number": "645-17-79"},
                    {"id": "id-4", "username": "Annie Copeland", "number": "227-91-26"}
                ]
      },
    // Об'єкт case-редюсерів
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload);
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
             },
             },
    });

    
  
  // Експортуємо фабрики екшенів
  export const { addContact, deleteContact} = slice.actions;
  
  // Експортуємо редюсер слайсу
  export default slice.reducer;

