import React, { createContext, useContext, useState } from 'react';

// FavoritesContext oluşturuluyor.
const FavoritesContext = createContext();

// FavoritesProvider bileşeni, favori ürünleri sağlayacak.
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => [...prevFavorites, product]);
  };

  const removeFromFavorites = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((product) => product.id !== productId)
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

// useFavorites hook'u, bu context'e kolay erişim sağlar.
export const useFavorites = () => useContext(FavoritesContext);
