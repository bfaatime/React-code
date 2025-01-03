import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import AdminLayout from './components/Admin/AdminLayout'
import Dashboard from './pages/Admin/Dashboard'
import AddProduct from './pages/Admin/AddProduct'
import AdminProducts from './pages/Admin/AdminProducts'
import ClientLayout from './components/Client/ClientLayout'
import Home from './pages/Client/Home'
import Details from './pages/Client/Details'
import Favorites from './pages/Client/Favorites'
import Basket from './pages/Client/Basket'
import NotFound from './pages/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path="/" element={<ClientLayout/>}>
    <Route path="/home" index element={<Home/>}/>
    <Route path="/details" element={<Details/>}/>
    <Route path="/favorites" element={<Favorites/>}/>
    <Route path="/basket" element={<Basket/>}/>
    </Route>

    <Route element={<AdminLayout/>}>
    <Route path="/admin" index element={<Dashboard/>}/>
    <Route path="/addproduct" element={<AddProduct/>}/>
    <Route path="/adminproducts" element={<AdminProducts/>}/>
    </Route>

    

    <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App
