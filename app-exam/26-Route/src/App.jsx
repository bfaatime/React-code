import { Route, Routes} from 'react-router-dom'
import './App.css'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'
import About from './pages/About'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound'
import MainLayout from './layouts/MainLayout'

function App() {

  return (
    <>
      <Routes>
       
    <Route path="/" element={<MainLayout/>}> 
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="products" element={<Products/>}/>
    <Route path="productdetails" element={<ProductDetails/>}/>
    <Route path="favorites" element={<Favorites/>}/>
    <Route path="*" element={<NotFound/>}/>
    </Route>
      </Routes>
    </>
  )
}

export default App
