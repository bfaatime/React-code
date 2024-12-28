import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'

const ClientHeader = () => {
  return (
    <header className={styles.clientheader}>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/Products">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/ProductDetails">ProductDetails</NavLink>
                </li>
                <li className='favorites'>
                    <NavLink to="/Favorites">Favorites</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default ClientHeader
