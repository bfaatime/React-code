import React from 'react'
import {Link} from 'react-router-dom'

function AdminNavbar () {
  return (
    <div className='adminnavbar'>
      <Link to="/addproducts">AddProducts</Link>
      <Link to="/products">Products</Link>
      <Link to="/editproducts">EditProducts</Link>
      <Link to="/dasboard">Dashboard</Link>
      <Link to="/users">Users</Link>
      <Link to="/edituser">EditUser</Link>
      <Link to="/addproduct">AddProduct</Link>
    </div>
  )
}

export default AdminNavbar
