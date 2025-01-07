import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Button, Spin, notification } from "antd";
import styles from "./index.module.scss"; 
const { Meta } = Card;

const ProductDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(({ data }) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching product details");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Spin tip="Loading..." className={styles.spinner} />;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.productDetails}>
      {product && (
        <Card
          hoverable
          cover={<img alt={product.title} src={product.image} />}
          style={{ width: 400 }}
        >
          <Meta title={product.title} description={product.description} />
          <p className={styles.price}>Price: ${product.price}</p>
          <Button
            type="primary"
            onClick={() =>
              notification.success({
                message: `${product.title} added to cart!`,
              })
            }
          >
            Add to Cart
          </Button>
        </Card>
      )}
      <Button
        type="default"
        style={{ marginTop: 20 }}
        onClick={() => window.history.back()}
      >
        Back to Products
      </Button>
    </div>
  );
};

export default ProductDetails;
