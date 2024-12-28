import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../../components/Client/ProductCard';
import { Row, Col, Input } from 'antd'; 
import styles from './index.module.scss'; 

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');  
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')  
      .then(({ data }) => {
        setProducts(data);  
        setFilteredProducts(data); 
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching products');
        setLoading(false);
      });
  }, []);


  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    

    if (query) {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);  
    }
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;  
  }

  return (
    <div className={styles.products}>
      {error ? (
        <div className={styles.error}>{error}</div>
      ) : (
        <>
          <Input
            placeholder="Search for a product"
            value={searchQuery}
            onChange={handleSearch}
            style={{ marginBottom: '20px' }}
          />
          {filteredProducts.length ? (
            <Row gutter={[16, 16]}>
              {filteredProducts.map(product => (
                <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          ) : (
            <div className={styles.noProducts}>No products found</div>
          )}
        </>
      )}
    </div>
  );
};

export default Products;
