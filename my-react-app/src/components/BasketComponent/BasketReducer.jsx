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
    increaseItemCount: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload ? { ...item, count: item.count + 1 } : item
      );
    },
    decreaseItemCount: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload && item.count > 0
          ? { ...item, count: item.count - 1 }
          : item
      );
    },
  }
});

export const { addItemToCart, removeItemFromCart, increaseItemCount, decreaseItemCount } = basketSlice.actions;
export default basketSlice.reducer;