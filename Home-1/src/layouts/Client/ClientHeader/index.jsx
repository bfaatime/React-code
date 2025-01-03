import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.scss';
const ClientHeader = () => {
  return (
    <>
    <header className={styles.clientheader}>
        <nav>
            <ul>
                <li>
                <NavLink to="/Home">Home</NavLink>
                </li>
                <li>
                <NavLink to="/Details">Details</NavLink>
                </li>
                <li>
                <NavLink to="/Favorites">Favorites</NavLink>
                </li>
                <li>
                <NavLink to="/Basket">Basket</NavLink>
                </li>
            </ul>
           
            
          
           
        </nav>
    </header>
    </>
  )
}

export default ClientHeader
