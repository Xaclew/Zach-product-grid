// ProductGrid.js
import React, { useState } from 'react';
import PriceFilter from './PriceFilter';
import products from './products';

const ProductGrid = () => {
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [sortType, setSortType] = useState('');
  //const [productView, setProductView] = useState(collapsed);

  const handlePriceChange = (price) => {
    setMaxPrice(price);
  };

  const filteredProducts = products.filter(product => product.price <= maxPrice);

  const handlePriceSort = (e) =>  setSortType(e.target.value);

  const sortedProducts = ([...products].sort(a,b) => {
    switch(sortType) {
      case "priceAscending" : return a.price - b.price;
      case "priceDescending" : return b.price - a.price;
      case "nameAscending" : return a.name.localeCompare(b.name);
      case "nameDescending" : return b.name.localeCompare(a.name);
    }
}).filter(product => product.price >= maxPrice);

  //const handleViewChange = (e) => changeView(e.target);

  return (
    <div>
      <PriceFilter onPriceChange={handlePriceChange} />
      <div className='sort=container'> 
      <label htmlFor='sort'>Sort By</label>
      <select id='sort' value={sortType} onChange={
        handlePriceSort
      }>
        <option value='priceAscending'>Price: Low - High</option>
        <option value='priceDescending'>Price: High - Low</option>
        <option value='nameAscending'>Name A - Z</option>
        <option value='nameDescending'>Name Z - a</option>
      </select>
      </div>
      <div className="products">
        {filteredProducts.map(product => (
          <div key={product.id} onClick={handleViewChange}>
            <img src={product.image}/>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
