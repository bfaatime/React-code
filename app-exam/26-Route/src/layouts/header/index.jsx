import { NavLink } from "react-router-dom";
import './index.module.scss'

const header = () => {
  return (
    <div>
       <header>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  )
}

export default header
