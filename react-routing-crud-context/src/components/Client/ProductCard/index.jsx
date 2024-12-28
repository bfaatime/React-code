import React, { useState } from 'react';
import { Card, Button, Tooltip } from 'antd';
import { EditOutlined, DeleteOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import styles from './index.module.scss'; 

const { Meta } = Card;

const ProductCard = ({ product, onEdit, onDelete }) => {
  const [isFavorite, setIsFavorite] = useState(false); 
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite); 
  };

  return (
    <Card
      hoverable
      className={styles.shortCard}  
      style={{ width: 240 }}
      cover={<img alt={product.title} src={product.image} />}
    >
      <Meta title={product.title} description={product.description} />
      <p className={styles.price}>Price: ${product.price}</p>

     
      <div className={styles.cardActions}>
        
        <Tooltip title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}>
          <Button
            onClick={toggleFavorite}
            type="link"
            icon={isFavorite ? <HeartFilled /> : <HeartOutlined />}
            size="small"
            style={{ color: isFavorite ? 'red' : 'inherit' }}
          />
        </Tooltip>

     
        <Tooltip title="Edit Product">
          <Button
            onClick={() => onEdit(product)}
            type="primary"
            icon={<EditOutlined />}
            size="small"
          />
        </Tooltip>

      
        <Tooltip title="Delete Product">
          <Button
            onClick={() => onDelete(product.id)}
            type="danger"
            icon={<DeleteOutlined />}
            size="small"
          />
        </Tooltip>
      </div>
    </Card>
  );
};

export default ProductCard;
