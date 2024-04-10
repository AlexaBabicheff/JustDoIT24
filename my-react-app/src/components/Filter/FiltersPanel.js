import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPriceRange, toggleDiscounted, setSorted } from './FiltersSlice';

const FiltersPanel = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const handlePriceChange = (e) => {
    dispatch(setPriceRange({ from: e.target.value, to: e.target.value }));
  };

  const handleDiscountedToggle = () => {
    dispatch(toggleDiscounted());
  };

  const handleSortedChange = (e) => {
    dispatch(setSorted(e.target.value));
  };

  return (
    <div>
      <label>
        Price from:
        <input type="number" value={filters.price.from} onChange={handlePriceChange} />
      </label>
      <label>
        Price to:
        <input type="number" value={filters.price.to} onChange={handlePriceChange} />
      </label>
      <label>
        Discounted:
        <input type="checkbox" checked={filters.discounted} onChange={handleDiscountedToggle} />
      </label>
      <label>
        Sorted by:
        <select value={filters.sorted} onChange={handleSortedChange}>
          <option value="utc">UTC</option>
          <option value="local">Local</option>
        </select>
      </label>
    </div>
  );
};

export default FiltersPanel;