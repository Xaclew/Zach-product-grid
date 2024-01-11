// PriceFilter.js
import React from 'react';
//omPriceChange is a function passed as a prop
const PriceFilter = ({ onPriceChange }) => {
  return (
    <div>
      <label htmlFor="maxPrice">Max Price:</label>
      <input
        type="number"
        id="maxPrice"
        onChange={(e) => onPriceChange(e.target.value)}
      />
    </div>
  );
};

export default PriceFilter;
