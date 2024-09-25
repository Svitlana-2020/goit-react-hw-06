import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import changeFilter from './filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: changeFilter,
  },
});

// const rootReducer = (state = initialState, action) => {
//   return state;
// };

