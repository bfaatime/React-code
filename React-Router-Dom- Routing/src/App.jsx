import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Client/Home';
import About from './Pages/Client/About';
import Contact from './Pages/Client/Contact';
import Blog from './Pages/Client/Blog';
import BlogDetail from './Pages/Client/BlogDetail';
import Login from './Pages/Client/Login';
import Register from './Pages/Client/Register';
import NotFound from './Pages/NotFound';
import AdminNavbar from './Components/AdminNavbar';

import AddProduct from './Pages/Admin/AddProduct';
import AddUser from './Pages/Admin/AddUser';
import Dashboard from './Pages/Admin/Dashboard';
import EditProduct from './Pages/Admin/EditProduct';
import EditUser from './Pages/Admin/EditUser';
import Produtcs from './Pages/Admin/Produtcs';
import Users from './Pages/Admin/Users';
import ClientNavbar from './Components/ClientNavbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AdminNavbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/blogdetail' element={<BlogDetail/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/addProduct' element={<AddProduct/>}/>
      <Route path='/addUser' element={<AddUser/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/editProduct' element={<EditProduct/>}/>
      <Route path='/editUser' element={<EditUser/>}/>
      <Route path='/produtcs' element={<Produtcs/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='*' element={<NotFound/>}/>
   </Routes>   
    </>
  )
}

export default App
