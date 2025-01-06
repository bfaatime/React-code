import React, { useState } from 'react';
import { useFavorites } from '../../../context/FavoritesContext'; 
import './index.module.scss';

const ProductCard = ({ product }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const { addToFavorites, removeFromFavorites } = useFavorites(); // Favorilere ekleme ve çıkarma

  const handleFavoriteClick = () => {
    if (isFavorited) {
      removeFromFavorites(product.id); // Favorilerden çıkar
    } else {
      addToFavorites(product); // Favorilere ekle
    }
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-description">{product.description}</p>
      <div className="product-rating">
        <span>{product.rating}⭐</span>
        <span>({product.reviews} reviews)</span>
      </div>
      <p className="product-price">${product.price}</p>

      <div className="product-actions">
        <button
          className={`favorite-btn ${isFavorited ? 'favorited' : ''}`}
          onClick={handleFavoriteClick}
        >
          ♥
        </button>
        {/* Sepete ürün ekleme işlemi */}
        <button
          className="add-to-basket-btn"
          onClick={() => console.log(`Added ${product.title} to basket`)}
        >
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
