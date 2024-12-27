import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../../Services/db/index.json'; 

const ProductDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = products.find(item => item.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetails;
