import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../../../components/Client/ProductCard';
import { Row, Col, Input, Modal, Form, Input as AntInput, Button } from 'antd'; 
import styles from './index.module.scss'; 

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')  
      .then(({ data }) => {
        setProducts(data);  
        setFilteredProducts(data); 
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.error("Error fetching products:", err);
      });
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);  
  };

  const handleSaveEdit = () => {
    setProducts(products.map(product =>
      product.id === editingProduct.id ? editingProduct : product
    ));
    setEditingProduct(null);  
  };

  const handleDelete = (productId) => {
    setProducts(products.filter(product => product.id !== productId));  
    setFilteredProducts(filteredProducts.filter(product => product.id !== productId)); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.products}>
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
              <ProductCard 
                product={product} 
                onEdit={handleEdit} 
                onDelete={handleDelete} 
              />
            </Col>
          ))}
        </Row>
      ) : (
        <div className={styles.noProducts}>No products found</div>
      )}

  
      <Modal
        title="Edit Product"
        visible={!!editingProduct}
        onOk={handleSaveEdit}
        onCancel={() => setEditingProduct(null)}
        okText="Save"
        cancelText="Cancel"
      >
        {editingProduct && (
          <Form layout="vertical">
            <Form.Item label="Title">
              <AntInput 
                name="title" 
                value={editingProduct.title} 
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item label="Description">
              <AntInput 
                name="description" 
                value={editingProduct.description} 
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item label="Price">
              <AntInput 
                name="price" 
                value={editingProduct.price} 
                onChange={handleChange}
              />
            </Form.Item>
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default Products;
