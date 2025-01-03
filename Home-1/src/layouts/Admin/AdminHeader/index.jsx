import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.scss';

const AdminHeader = () => {
  return (
    <>
    <header className={styles.adminheader}>
        <nav>
            <ul>
                <li>
                <NavLink to="/admin">Dashboard</NavLink>
                </li>
                <li>
                <NavLink to="/addproduct">AddProduct</NavLink>
                </li>
                <li>
                <NavLink to="/adminproducts">AdminProducts</NavLink>
                </li>
            </ul>
            
            
           
        </nav>
    </header>
    </>
  )
}

export default AdminHeader
