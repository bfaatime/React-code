import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'

const AdminHeader = () => {
  return (
      <header className={styles.header}>
        <nav>
            <ul>
                <li>
                    <NavLink to="/admin">Dasboard</NavLink>
                </li>
                <li>
                    <NavLink to="/adminproducts">AdminProducts</NavLink>
                </li>
                <li>
                    <NavLink to="/addproduct">AddProducts</NavLink>
                </li>
            </ul>
        </nav>
    </header>
   
  )
}

export default AdminHeader
