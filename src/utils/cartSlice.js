import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutating the state here i.e directly modifying the state
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const removeIndex = state.items.findIndex(
        (item) => item.card.info.id === action.payload
      );
      state.items.splice(removeIndex, 1);
    },
    clearCart: (state) => {
      // state.items.length = 0; ===> //can either do like this or like below
      return {items: []};
    },
  },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
