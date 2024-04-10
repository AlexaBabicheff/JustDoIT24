
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  price: { from: 0, to: 0 },
  discounted: false,
  sorted: 'utc',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setPriceRange(state, action) {
      state.price = action.payload;
    },
    toggleDiscounted(state) {
      state.discounted = !state.discounted;
    },
    setSorted(state, action) {
      state.sorted = action.payload;
    },
  },
});

export const { setPriceRange, toggleDiscounted, setSorted } = filtersSlice.actions;

export default filtersSlice.reducer;
