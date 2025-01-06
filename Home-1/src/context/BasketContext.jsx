import React, { createContext, useContext, useState } from 'react';

// BasketContext oluşturuluyor.
const BasketContext = createContext();

// BasketProvider bileşeni, sepet verisini sağlayacak.
export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    setBasket((prevBasket) => [...prevBasket, product]);
  };

  const removeFromBasket = (productId) => {
    setBasket((prevBasket) =>
      prevBasket.filter((product) => product.id !== productId)
    );
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

// useBasket hook'u, bu context'e kolay erişim sağlar.
export const useBasket = () => useContext(BasketContext);
