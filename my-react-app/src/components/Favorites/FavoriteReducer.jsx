import React from 'react';
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const FavoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addItemToFavorites: (state, action) => {
      console.log(state);
      console.log(action);
      // if (!action.payload || !action.payload.id) {
      //    //добавить дополнительную логику, если есть 
      //   return;
      // }

      const existingItem = state.items.find(({ id }) => id === action.payload.id);

      console.log(existingItem);

      if (existingItem) {
        state.items = state.items.filter(({ id }) => id !== action.payload);
      } else {
        console.log('pushing', action.payload);
        state.items.push(action.payload);
      }
    },
    removeItemFromFavorites: (state, action) => {
      console.log('remove favorite', action.payload);
      state.items = state.items.filter(({ id }) => id !== action.payload);
      state.items = state.items.filter(({ id }) => parseInt(id) !== action.payload);
    },
  },
});

export const { addItemToFavorites, removeItemFromFavorites } = FavoritesSlice.actions;
export default FavoritesSlice.reducer;