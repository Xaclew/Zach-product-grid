// ProductGrid.js
import React, { useState } from 'react';
import PriceFilter from './PriceFilter';
import products from './products';
import ProductCard from './productCard';

const ProductGrid = () => {
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [sortType, setSortType] = useState('nameAscending');
  
  const handlePriceSort = (e) =>  {setSortType(e.target.value)};
  
  



 // const filteredProducts = products.filter(product => product.price <= maxPrice);

  

  const sortedProducts = [...products].sort((a,b) => {
    switch(sortType) {
      case "priceAscending" : return a.price - b.price;
      case "priceDescending" : return b.price - a.price;
      case "nameAscending" : return a.name.localeCompare(b.name);
      case "nameDescending" : return b.name.localeCompare(a.name);
      default: return 0;
    }
}).filter(product => product.price <= maxPrice);

  const handlePriceChange = (price) => {
    setMaxPrice(price)
  };

  return (
    <div>
      <PriceFilter onPriceChange={handlePriceChange} />
      <div className='sort=container'> 
      <label htmlFor='sort'>Sort By</label>
      <select id='sort' value={sortType} onChange={
        handlePriceSort
      }>
        <option value="priceAscending">Price: Low - High</option>
        <option value="priceDescending">Price: High - Low</option>
        <option value="nameAscending">Name A - Z</option>
        <option value="nameDescending">Name Z - A</option>
      </select>
      </div>
      <div className="products">
        {sortedProducts.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
