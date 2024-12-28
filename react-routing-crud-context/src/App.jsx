import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import './App.css'
import ClientLayout from './components/Client/ClientLayout'
import Products from './pages/Client/Products'
import Home from './pages/Client/Home'
import Contact from './pages/Client/Contact'
import ProductDetails from './pages/Client/ProductDetails'
import AdminLayout from './components/Admin/AdminLayout'
import Dashboard from './pages/Admin/Dashboard'
import AddProduct from './pages/Admin/AddProduct'
import AdminProducts from './pages/Admin/AdminProducts'
import Favorites from './pages/Client/Favorites'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productdetails/:id" element={<ProductDetails/>}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Route>
        <Route  element={<AdminLayout/>}>
        <Route path="/admin" index element={<Dashboard/>}/>
        <Route path="/addproduct" element={<AddProduct/>}/>
        <Route path="/adminproducts" element={<AdminProducts/>}/>
        </Route>
      </Routes>
    </>

  )
}

export default App
