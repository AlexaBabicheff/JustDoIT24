import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const FavoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addItemToFavorites: (state, action) => {
      if (!action.payload || !action.payload.id) {
        // Добавьте обработку некорректных входных данных
        return;
      }

      const existingItem = state.items.find(({ id }) => id === action.payload.id);

      if (existingItem) {
        state.items = state.items.map((item) => {
          return item.id === action.payload.id
            ? { ...item, count: action.payload.count + item.count }
            : item;
        });
      } else {
        state.items.push(action.payload);
      }
    },
    removeItemFromFavorites: (state, action) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addItemToFavorites, removeItemFromFavorites } = FavoritesSlice.actions;
export default FavoritesSlice.reducer;