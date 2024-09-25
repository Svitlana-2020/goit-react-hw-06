import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
	  status: "",
  },
  reducers: {
    changeFilter(state, action) {
        state.status = action.payload;
    },
  },
});


// Експортуємо фабрики екшенів
export const { changeFilter } = slice.actions;

// Експортуємо редюсер слайсу
export default slice.reducer;
