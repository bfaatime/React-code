import React, { useState } from "react";
import ProductCard from "../../../Components/Client/ClientLayout/ProductCard";
import SearchBar from "../components/SearchBar"; 
import { products } from "../../../Services/db/index.json";


const Products = () => {
  const [searchQuery, setSearchQuery] = useState(""); 
  

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="products-page">
      <SearchBar query={searchQuery} setQuery={setSearchQuery} />
      
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Product not found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
