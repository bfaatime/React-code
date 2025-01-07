import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../../../components/Client/ProductCard";
import { Row, Col, Input, Spin } from "antd";
import styles from "./index.module.scss";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]); 

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(({ data }) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => {
    
      if (!prevFavorites.some((fav) => fav.id === product.id)) {
        return [...prevFavorites, product];
      }
      return prevFavorites; 
    });
  };

  const removeFromFavorites = (productId) => {
    setFavorites(favorites.filter((product) => product.id !== productId));
  };

  const isFavorited = (productId) => {
    return favorites.some((product) => product.id === productId);
  };

  return (
    <div className={styles.products}>
      <Input
        placeholder="Search for a product"
        value={searchQuery}
        onChange={handleSearch}
        style={{ marginBottom: "20px" }}
      />
      {loading ? (
        <Spin tip="Loading..." />
      ) : (
        <Row gutter={[16, 16]}>
          {filteredProducts.map((product) => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
              <ProductCard
                product={product}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
                isFavorited={isFavorited(product.id)} 
              />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Products;
