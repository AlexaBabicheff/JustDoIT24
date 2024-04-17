import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      let newItems = [...state.items];
      const found = state.items.find(({ id }) => id === action.payload.id);

      if (found) {
        newItems = newItems.map((item) => {
          return item.id === action.payload.id
            ? { ...item, count: action.payload.count + item.count }
            : item;
        });
      } else newItems.push(action.payload);
      
      state.items = newItems;
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
  }
});

export const { addItemToCart } = basketSlice.actions;
export const { removeItemFromCart } = basketSlice.actions;
export default basketSlice.reducer;
