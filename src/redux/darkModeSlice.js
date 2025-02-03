import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: localStorage.getItem("darkMode") === "true", 
  reducers: {
    toggleDarkMode: (state) => {
      const newState = !state;
      localStorage.setItem("darkMode", newState); 
      return newState;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
