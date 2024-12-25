import React from 'react'
import {Link} from 'react-router-dom'

function ClientNavbar () {
  return (
    <div className='clientnavbar'>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/blogdetail">blogdetail</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/home">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  )
}

export default ClientNavbar