import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../../components/Client/ProductCard';  
import './index.module.scss';  

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:5000/products') 
      .then(response => {
        setProducts(response.data); 
      })
      .catch(error => {
        console.error('Error fetching products:', error); 
      });
  }, []);

  return (
    <div className="home-page">
      <h2 className="home-title">Our Products</h2>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
