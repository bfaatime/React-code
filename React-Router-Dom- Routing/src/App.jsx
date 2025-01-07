import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ClientLayout from "./components/Client/ClientLayout";
import Home from "./pages/Client/Home";
import Products from "./pages/Client/Products";
import Contact from "./pages/Client/Contact";
import ProductDetails from "./pages/Client/ProductDetails";
import Favorites from "./pages/Client/Favorites";
import AdminLayout from "./components/Admin/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard";
import AddProduct from "./pages/Admin/AddProduct";
import AdminProducts from "./pages/Admin/AdminProducts";

function App() {
  const [favorites, setFavorites] = useState([]); 


  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some((fav) => fav.id === product.id)) {
        return [...prevFavorites, product];
      }
      return prevFavorites; 
    });
  };

 
  const removeFromFavorites = (productId) => {
    setFavorites(favorites.filter((fav) => fav.id !== productId));
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/products"
            element={
              <Products addToFavorites={addToFavorites} favorites={favorites} />
            }
          />
          <Route
            path="/productdetails/:id"
            element={<ProductDetails />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                removeFromFavorites={removeFromFavorites}
              />
            }
          />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path="/admin" index element={<Dashboard />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/adminproducts" element={<AdminProducts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
