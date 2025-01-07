import React from "react";
import { Card, Button } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons"; 
import styles from "./index.module.scss";

const ProductCard = ({ product, addToFavorites, removeFromFavorites, isFavorited }) => {
  const handleFavoriteToggle = () => {
    if (isFavorited) {
      removeFromFavorites(product.id); 
    } else {
      addToFavorites(product); 
    }
  };

  return (
    <div className={styles.productCard}>
      <Card hoverable cover={<img alt={product.title} src={product.image} />}>
        <Card.Meta title={product.title} description={product.description} />
        <div className={styles.price}>${product.price}</div>

        <Button
          type="text"
          icon={
            isFavorited ? (
              <HeartFilled style={{ color: "red", fontSize: "20px" }} /> 
            ) : (
              <HeartOutlined style={{ fontSize: "20px" }} /> 
            )
          }
          onClick={handleFavoriteToggle} 
        />
      </Card>
    </div>
  );
};

export default ProductCard;
