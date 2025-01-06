import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../../../context/FavoritesContext'; 
import './index.module.scss'; // Global SCSS dosyasını ekliyoruz.

const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavorites(); 
  const navigate = useNavigate();

  // Eğer favorites dizisi boş veya geçersizse, kullanıcıya hata mesajı gösterelim.
  if (!favorites || !Array.isArray(favorites)) {
    return <div>Error: Favori ürünler verisi bulunamadı.</div>;
  }

  return (
    <div className="favorites-page">
      <h2>Your Favorite Products</h2>
      {/* Eğer favorilerde ürün yoksa, kullanıcıya "Boş" mesajı veriyoruz */}
      {favorites.length === 0 ? (
        <p>No items in your favorites.</p>
      ) : (
        <div className="favorites-list">
          {/* Favori ürünleri listeleme */}
          {favorites.map((product) => (
            <div key={product.id} className="favorite-item">
              <img
                src={product.image}
                alt={product.title}
                className="favorite-item-image"
              />
              <div className="favorite-item-details">
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                {/* Favoriden kaldırma butonu */}
                <button onClick={() => removeFromFavorites(product.id)}>
                  Remove from Favorites
                </button>
                {/* Ürün detaylarına gitmek için View Details butonu */}
                <button onClick={() => navigate(`/productdetails/${product.id}`)}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
