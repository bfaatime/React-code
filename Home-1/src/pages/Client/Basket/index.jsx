import React from 'react';
import { useBasket } from '../../../context/BasketContext';
import { Link } from 'react-router-dom';
import './index.module.scss'; 

const Basket = () => {
  const { basket, removeFromBasket } = useBasket(); 

  const totalPrice = basket.reduce((total, product) => total + product.price, 0);

  return (
    <div className="basket-page">
      <h2>Your Basket</h2>
      {basket.length === 0 ? (
        <p>No items in your basket.</p>
      ) : (
        <div>
          {basket.map((product) => (
            <div key={product.id} className="basket-item">
              <img src={product.image} alt={product.title} className="basket-item-image" />
              <div className="basket-item-details">
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <button onClick={() => removeFromBasket(product.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="basket-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      )}
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Basket;
