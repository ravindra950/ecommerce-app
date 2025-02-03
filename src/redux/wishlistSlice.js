import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: JSON.parse(localStorage.getItem("wishlist")) || [],
  reducers: {
    addToWishlist: (state, action) => {
      if (!state.some(item => item.id === action.payload.id)) {
        state.push(action.payload);
        localStorage.setItem("wishlist", JSON.stringify(state));
      }
    },
    removeFromWishlist: (state, action) => {
      const updatedState = state.filter(item => item.id !== action.payload.id);
      localStorage.setItem("wishlist", JSON.stringify(updatedState));
      return updatedState;
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
