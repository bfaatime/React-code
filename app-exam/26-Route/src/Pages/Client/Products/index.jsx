// src/pages/Products.js
import React, { useState } from 'react';
import ProductCard from '../../../Components/Client/ClientLayout/ProductCard';
import SearchBar from '../components/SearchBar';
import { products } from '../../../Services/db/index.json'; 

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (query) => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
